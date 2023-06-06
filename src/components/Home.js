import "../style/home.css";
//
import { NavLink } from "react-router-dom";
//
import Background from "../images/background-banner.webp";
import Dog from "./icons/dog.js";
import Cat from "./icons/cat.js";
import Fish from "./icons/fish.js";
import Bird from "./icons/bird.js";
//
import Wave from "./icons/wave.js";
//
import Products from "./products/Products";
import Brands from "./misc/Brands";
import Adopt from "./adopt/Adopt";
import Stepts from "./misc/Stepts";
import Lost from "./lost/Lost";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="background-pet" />
        <div className="banner">
          <div className="backg" />
          <img
            alt="fondo del banner"
            title="Fondo"
            src={Background}
            loading="lazy"
          />

          <div className="pets">
            <div className="dog">
              <Dog />
            </div>
            <div className="cat">
              <Cat />
            </div>
            <div className="fish">
              <Fish />
            </div>
            <div className="bird">
              <Bird />
            </div>
          </div>

          <div className="bn">
            <div className="bn-text">
              <h2>BroPets</h2>
              <h3>Cuidamos de tus mejores amigos</h3>
              <p>
                En BroPets nos preocupamos por el bienestar de tus mascotas.
                Ofrecemos una amplia selección de alimentos y productos para su
                cuidado, así como opciones de adopción y búsqueda de animales
                perdidos.
                <br />
                ¡Haz clic en 'Comprar' y descubre todo lo que tenemos para
                ofrecer!
              </p>
            </div>
            <div className="bn-button">
              <button className="buy">
                <NavLink to="/productos"> Comprar</NavLink>
              </button>
              <button className="explore">
                <NavLink to="/adopcion"> Explorar</NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="components">
          <Products />
          <div className="wave wave-bns">
            <Wave />
          </div>
          <Brands />
          <div className="wave wave-bnp">
            <Wave />
          </div>
          <Adopt />
          <div className="wave md wave-bns">
            <Wave />
          </div>
          <Stepts />
          <div className="wave md wave-bnp">
            <Wave />
          </div>
          <Lost />
          <div className="wave">
            <Wave />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
