"use client";

import { useState } from "react";

const contactBase = "mailto:hola@ideamos.ar?subject=";

const plans = [
  {
    name: "Inmobiliaria",
    eyebrow: "PARA INMOBILIARIAS",
    copy: "Todo lo necesario para publicar tu cartera, presentar tu marca y operar con una web profesional.",
    prices: { ARS: "250.000", USD: "170" },
    featured: false,
    includes: [
      "Todas las funcionalidades incluidas",
      "Hasta 2.000 propiedades",
      "Soporte técnico Standard",
      "Tiempo de respuesta: hasta 5 días",
      "Atención vía email",
      "Atención vía chatbot",
      "Artículos de ayuda",
      "Atención vía WhatsApp",
      "Atención vía videollamadas",
      "Cambios autogestionados",
      "Cambios y modificaciones asistidos",
    ],
  },
  {
    name: "Inmobiliaria Plus",
    eyebrow: "MÁS ELEGIDO",
    copy: "Para equipos que necesitan catálogo ilimitado, prioridad de soporte y acompañamiento más cercano.",
    prices: { ARS: "300.000", USD: "200" },
    featured: true,
    includes: [
      "Todas las funcionalidades incluidas",
      "Propiedades ilimitadas",
      "Soporte técnico Plus",
      "Tiempo de respuesta: hasta 1 día",
      "Atención vía email",
      "Atención vía chatbot",
      "Artículos de ayuda",
      "Atención vía WhatsApp",
      "Atención vía videollamadas",
      "Cambios autogestionados",
      "Cambios y modificaciones asistidos",
    ],
  },
];

export default function PricingPlans() {
  const [currency, setCurrency] = useState<"ARS" | "USD">("ARS");

  return (
    <>
      <div className="currency-switch-wrap">
        <div>
          <span>PAÍS / MONEDA</span>
          <p>Elegí cómo querés ver los precios de lanzamiento.</p>
        </div>
        <div className="currency-switch" role="group" aria-label="Elegir moneda">
          <button className={currency === "ARS" ? "active" : ""} type="button" onClick={() => setCurrency("ARS")} aria-pressed={currency === "ARS"}>
            <span aria-hidden="true">🇦🇷</span> Argentina <small>ARS</small>
          </button>
          <button className={currency === "USD" ? "active" : ""} type="button" onClick={() => setCurrency("USD")} aria-pressed={currency === "USD"}>
            <span aria-hidden="true">🌎</span> Otros países <small>USD</small>
          </button>
        </div>
      </div>

      <aside className="launch-bonus" aria-label="Promoción de lanzamiento">
        <div><span>PROMOCIÓN DE LANZAMIENTO</span><strong>USD 2.500</strong><small>PUESTA EN MARCHA + DISEÑO</small></div>
        <p><b>100% bonificados.</b> Adaptamos el diseño y configuramos la plataforma para tu inmobiliaria sin costo inicial. Pagás únicamente el abono mensual.</p>
      </aside>

      <div className="launch-price-grid">
        {plans.map((plan, index) => (
          <article className={plan.featured ? "launch-price-card featured" : "launch-price-card"} key={plan.name}>
            <div className="launch-price-top">
              <span>0{index + 1}</span>
              <small>{plan.eyebrow}</small>
            </div>
            <div className="launch-price-title">
              <div><span className="plan-dot" /><small>PRECIO DE LANZAMIENTO</small></div>
              <h2>{plan.name}</h2>
              <p>{plan.copy}</p>
            </div>
            <div className="launch-price-value" aria-live="polite">
              <span>{currency}</span>
              <strong>{plan.prices[currency]}</strong>
              <div><b>+ IVA</b><small>/ mes</small></div>
            </div>
            <p className="plan-bonus"><span aria-hidden="true">✦</span> Puesta en marcha y diseño personalizado bonificados</p>
            <ul>
              {plan.includes.map((item, itemIndex) => (
                <li className={itemIndex < 4 ? "key-feature" : ""} key={item}><span aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
            <a className={plan.featured ? "button button-accent full" : "button button-soft full"} href={contactBase + encodeURIComponent("Quiero el plan " + plan.name)}>
              Elegir {plan.name} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="launch-price-note">Los precios en ARS corresponden a Argentina. Los valores no incluyen IVA. Precio promocional de lanzamiento.</p>
    </>
  );
}