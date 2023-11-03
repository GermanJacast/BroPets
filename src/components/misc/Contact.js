import React, { useState } from "react";
import "../../style/misc/contact.css";
import "../../style/home.css";
import Wave from "../icons/wave";
import Footer from "../layout/Footer";
import Logo from "../../images/Logo-BroPets.webp";
import ContactOne from "../../images/contact/contact01.webp";
import ContactTwo from "../../images/contact/contact02.webp";
import ContactThree from "../../images/contact/contact03.webp";
import ContactFour from "../../images/contact/contact04.webp";
import { dataFQ } from "../../data/dataFQ";

const Contact = () => {
  const [fqStates, setFqStates] = useState([]);

  const toggleFq = (index) => {
    const updateFq = [...fqStates];
    updateFq[index] = !updateFq[index];
    setFqStates(updateFq);
  };

  return (
    <div className="container-contact">
      <div className="about-us">
        <div className="bn-secondary-color" />
        <h2>
          <b>¿</b>Quiénes somos<b>?</b>
        </h2>
        <div className="container-about-us">
          <div className="content-about-us">
            <img
              className="logo"
              src={Logo}
              alt="Logo que representa a BroPets"
              title="Logo BroPets"
              loading="lazy"
            />
            <p className="left">
              BroPets es un proyecto dedicado a promover el amor y cuidado hacia
              las mascotas. Nos apasiona crear un mundo donde cada mascota sea
              tratada con respeto y sea capaz de encontrar un hogar amoroso en
              el cual vivir. Nuestro objetivo es fomentar la adopción
              responsable y brindar recursos útiles para ayudar a los dueños de
              mascotas a proporcionarles una vida feliz y saludable.
            </p>
          </div>
          <div className="content-about-us">
            <p>
              Con un equipo comprometido y amante de los animales, estamos aquí
              para compartir conocimientos, historias inspiradoras y consejos
              prácticos. Únete a nosotros en esta aventura y juntos hagamos de
              este mundo un lugar mejor para todas las mascotas
            </p>
            <img
              src={ContactTwo}
              alt="Especialista explicando los cuidados de su mascota"
              title="Veterinario"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="wave md wave-bns">
        <Wave />
      </div>

      <div className="why-do-it">
        <div className="bn-primary-color" />
        <h3>
          <b>¿</b>Por qué lo hacemos<b>?</b>
        </h3>
        <div className="container-why-do-it">
          <div className="content-why-do-it">
            <img
              src={ContactFour}
              alt="Niña abranzando gato"
              title="Niña con su gato"
              loading="lazy"
            />
            <p className="left">
              En BroPets, creemos firmemente en el poder de la conexión entre
              humanos y mascotas. Nos apasiona promover el bienestar animal y
              ayudar a crear hogares amorosos para aquellos amigos peludos que
              han sido abandonados o perdidos.
            </p>
          </div>
          <div className="content-why-do-it">
            <p>
              Nos dedicamos a este proyecto porque creemos que todos los
              animales merecen una segunda oportunidad y un lugar seguro donde
              puedan recibir el amor y el cuidado que necesitan. Nos esforzamos
              por ser un puente entre las mascotas en busca de un hogar y las
              personas dispuestas a brindarles una vida mejor.
            </p>
            <img
              src={ContactOne}
              alt="La famila feliz con su nuevo perro"
              title="Familia y su perro"
              loading="lazy"
            />
          </div>
          <div className="content-why-do-it">
            <img
              src={ContactThree}
              alt="Mujer sonriente jugando con perro"
              title="Mujer y su perro"
              loading="lazy"
            />
            <p className="left">
              Cada día trabajamos con pasión y compromiso para hacer del mundo
              un lugar más amigable y compasivo para nuestros amigos de cuatro
              patas. Juntos, podemos marcar la diferencia en la vida de estos
              seres especiales y crear una comunidad donde todos los animales
              sean valorados y protegidos.
            </p>
          </div>
        </div>

        {/* Frecuent questions */}
        <div className="fq-container">
          <h3>Preguntas Frecuentes</h3>
          <div className="fq-content">
            {dataFQ.map((data, index) => (
              <div
                className={`fq-card ${fqStates[index] ? "fqA" : ""}`}
                key={data.id}
              >
                <div className="fq-header" onClick={() => toggleFq(index)}>
                  <p>{data.question}</p>
                  <span>{fqStates[index] ? "-" : "+"}</span>
                </div>
                <div className="fq-footer">
                  <p>{data.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wave md wave-bnp">
        <Wave />
      </div>

      <div className="form-contact">
        <div className="bn-secondary-color" />
        <h3>Contactanos</h3>
        <p>
          Gracias por querer ponerte en contacto con nosotros. Estamos aquí para
          responder todas las consultas y comentarios que tengas. Por favor,
          completa el siguiente formulario con tus datos y mensaje que desees
          entregarnos, y nosotros nos pondremos en contacto contigo lo antes
          posible.
        </p>
        <p>¡Esperamos saber de ti!</p>
        <form>
          <div className="input-text">
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="input-text">
            <input type="text" placeholder="Correo Electronico" />
          </div>
          <div className="input-text">
            <textarea placeholder="Asunto" />
          </div>
          <div className="input-text">
            <button>Contactar</button>
          </div>
        </form>
      </div>

      <div className="wave md wave-bns">
        <Wave />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
