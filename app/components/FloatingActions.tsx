const whatsappUrl = "https://wa.me/5491167681777?text=Hola%2C%20quiero%20conocer%20mas%20sobre%20Ideamos%20Inmobiliarias.";

export default function FloatingActions() {
  return (
    <nav className="floating-actions" aria-label="Accesos rapidos">
      <a className="floating-action floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <span className="whatsapp-mark" aria-hidden="true">wa</span>
        <b>WhatsApp</b>
      </a>
      <a className="floating-action floating-top" href="#top" aria-label="Volver al inicio de la pagina">
        <span aria-hidden="true">&uarr;</span>
        <b>Arriba</b>
      </a>
    </nav>
  );
}