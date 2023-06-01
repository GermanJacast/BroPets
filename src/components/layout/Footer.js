import React from "react";
import "../../style/layout/footer.css";
import Instagram from "../icons/socialMedia/instagram";
import Facebook from "../icons/socialMedia/facebook";
import Twitter from "../icons/socialMedia/twitter";
import Youtube from "../icons/socialMedia/youtube";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="bn-primary-color" />
      <div className="content-footer">
        <div className="content">
          <h3>Contactanos</h3>
          <div className="info">
            <span>Celular:</span>
            <p>+569 12345678</p>
          </div>
          <div className="info">
            <span>Email</span>
            <a href="mailto:contacto@bropets.com?Subject=Los%20necesito%20urgente">
              contacto@bropets.com
            </a>
          </div>
        </div>
        <div className="content">
          <h3>Encuentranos</h3>
          <div className="branch">
            <span>Antofagasta</span>
            <div className="afta">
              <p>Avda BroPets 1234, Pets.</p>
              <span>Lunes a viernes</span>
              <p>09:00 a 19:00hrs</p>
              <span>Sabados</span>
              <p>10:00 a 14:00hrs</p>
              <span>Domingos</span>
              <p>Cerrado</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h3>Formas de pago</h3>
          <img
            src="http://cdn.shopify.com/s/files/1/0013/9935/7503/files/webpay-logo1_faf9fd07-8683-4715-a39b-e990828e3703_large.png?v=1522242608"
            alt="Medios de pago"
          />
        </div>
        <div className="content">
          <h3>Siguenos</h3>
          <Instagram />
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
