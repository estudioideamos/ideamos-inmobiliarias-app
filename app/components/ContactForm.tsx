"use client";

import { FormEvent, useEffect, useState } from "react";

const contactEmail = "hola@ideamos.com.ar";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [plan, setPlan] = useState("Quiero que me asesoren");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const requestedPlan = new URLSearchParams(window.location.search).get("plan");
    if (requestedPlan) setPlan(requestedPlan);
  }, []);

  async function sendByEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", `Nueva consulta web · ${data.get("inmobiliaria") || "Ideamos Inmobiliarias"}`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("No se pudo enviar la consulta");
      setStatus("sent");
      form.reset();
      setPlan("Quiero que me asesoren");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`contact-form${compact ? " contact-form-compact" : ""}`} onSubmit={sendByEmail} data-email-endpoint={contactEmail}>
      <input type="hidden" name="_subject" value="Nueva consulta desde Ideamos Inmobiliarias" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="contact-form-head"><span>CONTANOS SOBRE TU INMOBILIARIA</span><small>RESPUESTA PERSONALIZADA</small></div>
      <div className="contact-form-grid">
        <label><span>Nombre y apellido</span><input name="nombre" type="text" autoComplete="name" placeholder="¿Cómo te llamás?" required /></label>
        <label><span>Inmobiliaria</span><input name="inmobiliaria" type="text" autoComplete="organization" placeholder="Nombre de tu inmobiliaria" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="nombre@inmobiliaria.com" required /></label>
        <label><span>Teléfono</span><input name="telefono" type="tel" autoComplete="tel" placeholder="Código de área + número" required /></label>
        <label><span>¿Qué te interesa?</span><select name="plan" value={plan} onChange={(event) => setPlan(event.target.value)}><option>Quiero que me asesoren</option><option>Plan Plus</option><option>Plan Premium</option><option>Ver una demostración</option><option>Integración con Tokko Broker</option><option>Otro CRM</option></select></label>
        <label className="contact-form-message"><span>¿Qué necesitás resolver?</span><textarea name="mensaje" rows={compact ? 3 : 4} placeholder="Contanos brevemente cómo trabajan hoy y qué les gustaría mejorar." /></label>
      </div>
      <div className="contact-form-submit"><p className={`form-status form-status-${status}`} aria-live="polite"><i /> {status === "sent" ? "Â¡Mensaje enviado correctamente! Recibimos tu consulta y nos contactaremos a la brevedad." : status === "error" ? "No pudimos enviar tu consulta. Por favor, intentÃ¡ nuevamente." : "Tus datos se envían de forma segura al email de nuestro equipo."}</p><button className="button button-accent" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar consulta"} <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}
