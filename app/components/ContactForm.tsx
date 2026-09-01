"use client";

import { FormEvent, useEffect, useState } from "react";

const contactEndpoint = "https://ideamos.ar/api/contacto.php";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [plan, setPlan] = useState("Quiero que me asesoren");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    setStartedAt(Date.now());
    const requestedPlan = new URLSearchParams(window.location.search).get("plan");
    if (requestedPlan) setPlan(requestedPlan);
  }, []);

  async function sendByEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("origen", window.location.href);
    setStatus("sending");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const payload = await response.json().catch(() => null) as { success?: boolean | string } | null;
      const delivered = payload?.success === true || payload?.success === "true";
      if (!response.ok || !delivered) throw new Error("No se pudo enviar la consulta");
      setStatus("sent");
      form.reset();
      setPlan("Quiero que me asesoren");
      setStartedAt(Date.now());
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`contact-form${compact ? " contact-form-compact" : ""}`} onSubmit={sendByEmail} data-email-endpoint={contactEndpoint}>
      <input className="contact-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="form_started_at" value={startedAt} readOnly />
      <div className="contact-form-head"><span>CONTANOS SOBRE TU INMOBILIARIA</span><small>RESPUESTA PERSONALIZADA</small></div>
      <div className="contact-form-grid">
        <label><span>Nombre y apellido</span><input name="nombre" type="text" autoComplete="name" placeholder="¿Cómo te llamás?" minLength={2} maxLength={120} required /></label>
        <label><span>Inmobiliaria</span><input name="inmobiliaria" type="text" autoComplete="organization" placeholder="Nombre de tu inmobiliaria" minLength={2} maxLength={160} required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="nombre@inmobiliaria.com" maxLength={190} required /></label>
        <label><span>Teléfono</span><input name="telefono" type="tel" autoComplete="tel" inputMode="tel" placeholder="Código de área + número" minLength={6} maxLength={60} required /></label>
        <label><span>¿Qué te interesa?</span><select name="plan" value={plan} onChange={(event) => setPlan(event.target.value)}><option>Quiero que me asesoren</option><option>Plan Plus</option><option>Plan Premium</option><option>Ver una demostración</option><option>Integración con Tokko Broker</option><option>Otro CRM</option></select></label>
        <label className="contact-form-message"><span>¿Qué necesitás resolver?</span><textarea name="mensaje" rows={compact ? 3 : 4} maxLength={3000} placeholder="Contanos brevemente cómo trabajan hoy y qué les gustaría mejorar." /></label>
      </div>
      {(status === "sent" || status === "error") && <div className={`contact-submit-toast contact-submit-toast-${status}`} role="status"><i aria-hidden="true">{status === "sent" ? "✓" : "!"}</i><span><small>{status === "sent" ? "CONSULTA ENVIADA" : "NO PUDIMOS ENVIARLA"}</small><strong>{status === "sent" ? "Gracias. Recibimos tu mensaje y te contactaremos a la brevedad." : "Intentá nuevamente en unos minutos."}</strong></span><button type="button" aria-label="Cerrar confirmación" onClick={() => setStatus("idle")}>×</button></div>}
      <div className="contact-form-submit"><p className={`form-status form-status-${status}`} aria-live="polite"><i /> {status === "sent" ? "¡Mensaje enviado correctamente! Recibimos tu consulta y nos contactaremos a la brevedad." : status === "error" ? "No pudimos enviar tu consulta. Por favor, intentá nuevamente." : status === "sending" ? "Enviando tu consulta…" : "Tus datos se envían de forma segura al email de nuestro equipo."}</p><button className="button button-accent" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar consulta"} <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}
