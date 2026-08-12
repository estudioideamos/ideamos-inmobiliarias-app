"use client";

import { FormEvent, useEffect, useState } from "react";

const contactEmail = "hola@ideamos.com.ar";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [plan, setPlan] = useState("Quiero que me asesoren");

  useEffect(() => {
    const requestedPlan = new URLSearchParams(window.location.search).get("plan");
    if (requestedPlan) setPlan(requestedPlan);
  }, []);

  function sendByEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Consulta web · ${data.get("inmobiliaria") || "Ideamos Inmobiliarias"}`;
    const body = [
      "Hola, quiero conocer Ideamos Inmobiliarias.",
      "",
      `Nombre: ${data.get("nombre")}`,
      `Inmobiliaria: ${data.get("inmobiliaria")}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Interés: ${data.get("plan")}`,
      `Mensaje: ${data.get("mensaje") || "Quiero coordinar una demostración."}`,
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={`contact-form${compact ? " contact-form-compact" : ""}`} onSubmit={sendByEmail}>
      <div className="contact-form-head"><span>CONTANOS SOBRE TU INMOBILIARIA</span><small>RESPUESTA PERSONALIZADA</small></div>
      <div className="contact-form-grid">
        <label><span>Nombre y apellido</span><input name="nombre" type="text" autoComplete="name" placeholder="¿Cómo te llamás?" required /></label>
        <label><span>Inmobiliaria</span><input name="inmobiliaria" type="text" autoComplete="organization" placeholder="Nombre de tu inmobiliaria" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="nombre@inmobiliaria.com" required /></label>
        <label><span>Teléfono</span><input name="telefono" type="tel" autoComplete="tel" placeholder="Código de área + número" required /></label>
        <label><span>¿Qué te interesa?</span><select name="plan" value={plan} onChange={(event) => setPlan(event.target.value)}><option>Quiero que me asesoren</option><option>Plan Plus</option><option>Plan Premium</option><option>Ver una demostración</option><option>Integración con Tokko Broker</option><option>Otro CRM</option></select></label>
        <label className="contact-form-message"><span>¿Qué necesitás resolver?</span><textarea name="mensaje" rows={compact ? 3 : 4} placeholder="Contanos brevemente cómo trabajan hoy y qué les gustaría mejorar." /></label>
      </div>
      <div className="contact-form-submit"><p><i /> Se prepara un email con tus datos para enviarlo a nuestro equipo.</p><button className="button button-accent" type="submit">Enviar consulta <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}
