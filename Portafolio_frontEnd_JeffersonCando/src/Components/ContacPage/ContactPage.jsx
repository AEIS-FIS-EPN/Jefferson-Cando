import React from "react";
import "./ContactPage.css";
import whatsappQRCode from "/src/Components/ContacPage/assets/QR mi contacto.png";
import linkedinLogo from "/src/Components/ContacPage/assets/linkedin.png";

const ContactPage = () => {
  const whatsappNumber = "0999348448";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="contact-container">
      <h1>Medios de contacto</h1>
      <div className="contact-info">
        <p>Puedes contactarme directamente a través de WhatsApp:</p>
      </div>
      <div className="contact-buttons">
        <button className="contact-button" onClick={openWhatsApp}>
          ¡Contáctame en WhatsApp!
        </button>
      </div>
      <div>
        <img
          src={whatsappQRCode}
          alt="Código QR de WhatsApp"
          className="qr-code"
        />
      </div>

      <div className="LinkedIDref">
        <div>
          <p>Visita mi perfil de linkedin</p>
        </div>
        <a
          href="https://www.linkedin.com/in/jefferson-cando-790a38125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="Logo de LinkedIn"
            className="linkedin-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
