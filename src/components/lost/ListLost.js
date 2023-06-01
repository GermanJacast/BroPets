import React from "react";
import "../../style/lost/listLost.css";
import Lost from "./Lost";
import Footer from "../layout/Footer";
import Wave from "../icons/wave";
import { NavLink } from "react-router-dom";

const ListLost = () => {
  return (
    <div className="container-list-lost">
      <div className="padd-list-lost" />

      <div className="understand-lost">
        <div className="bn-secondary-color" />
        <h2>Comprendemos que es perder a un amigo</h2>
        <p>
          Encontrar a tu mascota perdida puede ser una experiencia angustiante y
          desgarradora. En nuestra comunidad, entendemos lo profundo que puede
          ser el vínculo con tu compañero y cómo se siente perderlo.
        </p>
        <p>
          Queremos ofrecerte nuestro apoyo y recursos para ayudarte a reunirte
          con tu querido amigo. Por eso, hemos creado este espacio dedicado a
          las mascotas perdidas.
        </p>
        <p>
          Aquí encontrarás una lista actualizada de mascotas que han sido
          reportadas como desaparecidas, en la esperanza de que alguien pueda
          reconocerlas y ayudar a reunirlas con sus familias.
        </p>
        <p>
          Nunca pierdas la esperanza. Juntos, podemos hacer la diferencia y
          reunir aquellos amigos con sus seres queridos.
          <NavLink to="/contacto"> Contáctanos</NavLink>
        </p>
        {/* <p>
          Explora nuestra lista de mascotas perdidas y únete a nuestra comunidad
          en este esfuerzo por devolver la alegría y el amor a los hogares
          afectados por la pérdida. Recuerda, cada esfuerzo cuenta. Si tienes
          alguna información sobre alguna de las mascotas listadas o deseas
          reportar una mascota perdida, no dudes en contactarnos. Estamos aquí
          para ayudarte en cada paso del camino.
        </p> */}
        <div className="understand-step"></div>
      </div>

      <div className="wave md wave-bns">
        <Wave />
      </div>

      <div className="tips-lost">
        <div className="bn-primary-color" />
        <h2>Cómo actuar ante la pérdida de nuestro amigo</h2>
        <div className="content-tips">
          <ul>
            <li>
              <p>
                <span>Verifica tu hogar y sus alrededores: </span>Realiza una
                búsqueda exhaustiva cerca de tu casa y en tu vecindario.
              </p>
            </li>
            <li>
              <p>
                <span>Notifica a tus vecinos: </span>Informa a tus vecinos sobre
                la situación y pídeles que estén atentos.
              </p>
            </li>
            <li>
              <p>
                <span>Publica en redes sociales y grupos locales: </span>
                Comparte la información de tu mascota perdida en grupos
                comunitarios y redes sociales.
              </p>
            </li>
            <li>
              <p>
                <span>Contacta a refugios y organizaciones locales: </span>
                Comunícate con refugios de animales y clínicas veterinarias
                cercanas.
              </p>
            </li>
            <li>
              <p>
                <span>Coloca carteles y volantes: </span>Crea carteles con la
                foto de tu mascota y colócalos en lugares visibles.
              </p>
            </li>
            <li>
              <p>
                <span>Utiliza dispositivos de identificación: </span>Asegúrate
                de que la información de contacto en el microchip esté
                actualizada.
              </p>
            </li>
            <li>
              <p>
                <span>Mantén la esperanza y sé persistente: </span>No te rindas
                fácilmente y continúa buscando.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="wave md wave-bnp">
        <Wave />
      </div>

      <div className="components-lost">
        <Lost />
      </div>

      <div className="wave wave-bns">
        <Wave />
      </div>

      <Footer />
    </div>
  );
};

export default ListLost;
