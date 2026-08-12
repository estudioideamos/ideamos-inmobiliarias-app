import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-section-copy">
        <p className="eyebrow light"><span /> Hablemos de tu inmobiliaria</p>
        <h2>Tu próxima web<br />empieza con una <em>buena conversación.</em></h2>
        <p>Contanos cómo trabajan hoy. Revisamos tu cartera, tu marca y las herramientas que usan para recomendarte el plan y el recorrido de implementación adecuados.</p>
        <div className="contact-data">
          <a href="https://wa.me/5491167681777" target="_blank" rel="noreferrer"><span>WHATSAPP</span><b>+54 9 11 6768 1777</b><i>↗</i></a>
          <a href="mailto:hola@ideamos.ar"><span>EMAIL</span><b>hola@ideamos.ar</b><i>↗</i></a>
          <div><span>BASE</span><b>Buenos Aires, Argentina</b><i>AR</i></div>
        </div>
      </div>
      <ContactForm compact />
    </section>
  );
}
