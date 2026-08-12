const contactBase = "/contacto?plan=";

const plans = [
  {
    name: "Plus",
    eyebrow: "PARA INMOBILIARIAS",
    copy: "Todo lo necesario para publicar tu cartera, presentar tu marca y operar con una web profesional.",
    prices: { ARS: "250.000", USD: "170" },
    featured: false,
    includes: [
      "Todas las funcionalidades incluidas",
      "Hasta 2.000 propiedades",
      "Soporte técnico Plus",
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
    name: "Premium",
    eyebrow: "MÁS ELEGIDO",
    copy: "Para equipos que necesitan catálogo ilimitado, prioridad de soporte y acompañamiento más cercano.",
    prices: { ARS: "300.000", USD: "200" },
    featured: true,
    includes: [
      "Todas las funcionalidades incluidas",
      "Propiedades ilimitadas",
      "Soporte técnico Premium",
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
  return (
    <div className="pricing-selector">
      <input className="currency-radio" id="currency-ars" type="radio" name="currency" defaultChecked />
      <input className="currency-radio" id="currency-usd" type="radio" name="currency" />
      <aside className="launch-bonus" aria-label="Promoción de lanzamiento">
        <div className="launch-bonus-copy"><span>PROMOCIÓN DE LANZAMIENTO</span><h3>Empezá sin costo<br />de implementación.</h3><p>Adaptamos el diseño, configuramos la plataforma y la dejamos lista para operar. <b>Pagás únicamente el abono mensual.</b></p></div>
        <div className="launch-bonus-value"><small>VALOR HABITUAL</small><s>USD 2.500</s><strong><span>HOY</span> USD 0</strong><em>100% BONIFICADO</em></div>
      </aside>

      <div className="currency-switch-wrap">
        <div>
          <span>PAÍS / MONEDA</span>
          <p>Elegí cómo querés ver los precios de lanzamiento.</p>
        </div>
        <div className="currency-switch" role="group" aria-label="Elegir moneda">
          <label htmlFor="currency-ars"><span className="currency-flag" aria-hidden="true">🇦🇷</span> Argentina <small>ARS</small></label>
          <label htmlFor="currency-usd"><span aria-hidden="true">🌎</span> Otros países <small>USD</small></label>
        </div>
      </div>

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
            <div className="launch-price-value price-ars">
              <span>ARS</span>
              <strong>{plan.prices.ARS}</strong>
              <div><b>IVA INCLUIDO</b><small>/ mes</small></div>
            </div>
            <div className="launch-price-value price-usd">
              <span>USD</span>
              <strong>{plan.prices.USD}</strong>
              <div><b>IVA INCLUIDO</b><small>/ mes</small></div>
            </div>
            <p className="plan-bonus"><span aria-hidden="true">✦</span> Puesta en marcha y diseño personalizado bonificados</p>
            {!plan.featured && <div className="plan-legend" aria-label="Referencia de prestaciones"><span><b>✓</b> Incluido</span><span><b>×</b> Solo en Premium</span></div>}
            <ul>
              {plan.includes.map((item, itemIndex) => {
                const unavailable = !plan.featured && itemIndex >= 4;
                return <li className={unavailable ? "unavailable" : itemIndex < 4 ? "key-feature" : ""} key={item}><span aria-hidden="true">{unavailable ? "×" : "✓"}</span><span>{item}</span></li>;
              })}
            </ul>
            <a className={plan.featured ? "button button-accent full" : "button button-soft full"} href={contactBase + encodeURIComponent("Plan " + plan.name)}>
              Elegir {plan.name} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="launch-price-note">Los precios informados son finales e incluyen IVA. Precio promocional de lanzamiento.</p>
    </div>
  );
}