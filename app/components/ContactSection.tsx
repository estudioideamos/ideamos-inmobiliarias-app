import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-section-copy">
        <p className="eyebrow light"><span /> Hablemos de tu inmobiliaria</p>
        <h2><span>Tu próxima web</span><span>empieza con una</span><em>buena conversación.</em></h2>
        <p>Contanos cómo trabajan hoy. Revisamos tu cartera, tu marca y las herramientas que usan para recomendarte el plan y el recorrido de implementación adecuados.</p>
        <div className="contact-data">
          <a href="https://wa.me/5491167681777" target="_blank" rel="noreferrer"><span>WHATSAPP</span><b>+54 9 11 6768 1777</b><i className="contact-icon contact-icon-whatsapp" aria-hidden="true"><img src="/whatsapp.svg" alt="" /></i></a>
          <a href="mailto:hola@ideamos.ar"><span>EMAIL</span><b>hola@ideamos.ar</b><i className="contact-icon contact-icon-mail" aria-hidden="true"><span /></i></a>
          <div><span>BASE</span><b>Buenos Aires, Argentina</b><i className="contact-icon contact-icon-pin" aria-hidden="true"><span /></i></div>
        </div>
      </div>
      <ContactForm compact />
    </section>
  );
}
