import React, { useState } from "react";
import "../../style/adopt/adopt.css";
import { dataAdopt } from "../../data/dataAdopt";
import Modal from "./ModalAdopt";
import Dog from "../icons/dog-adopt";
import Cat from "../icons/cat-adopt";
import Bird from "../icons/bird-adopt";
import Rabbit from "../icons/rabbit-adopt";
import Hamster from "../icons/hamster-adopt";
import Fish from "../icons/fish-adopt";
import Bnr from "../icons/more/banner-adopt";

const Adopt = () => {
  const [adopt, setAdopt] = useState("all");
  const [adoptData, setAdoptData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = (dataA) => {
    setAdoptData([dataA]);
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-adopt">
      <div className="bn-secondary-color" />
      <div className="container-bnr-adopt">
        <div className="text-bnr">
          <p>No compres,</p>
          <h3>ADOPTA</h3>
          <p>
            No dejes a <b>un</b> amigo solo.
          </p>
          <p>
            Haz espacio en tu corazón y adopta un <b>amigo</b>
          </p>
        </div>
        <Bnr />
      </div>
      <hr />
      <div className="title-adopt">
        <div className="container-category-adopt">
          <span className="all-adopt" onClick={() => setAdopt("all")}>
            Todos
          </span>
          <span onClick={() => setAdopt("dog")}>
            <Dog />
          </span>
          <span onClick={() => setAdopt("cat")}>
            <Cat />
          </span>
          <span onClick={() => setAdopt("fish")}>
            <Fish />
          </span>
          <span onClick={() => setAdopt("bird")}>
            <Bird />
          </span>
          <span onClick={() => setAdopt("Hamsters")}>
            <Hamster />
          </span>
          <span onClick={() => setAdopt("Rabbits")}>
            <Rabbit />
          </span>
        </div>
      </div>
      <div className="container-pets">
        <Modal adoptData={adoptData} isOpen={isOpen} onClose={modalClose} />
        <div className="list-pets-adopt">
          {dataAdopt.filter(
            (dataAdopt) => dataAdopt.category === adopt || adopt === "all"
          ).length === 0 ? (
            <div className="no-data">
              <p>No hay mascotas para adopción disponibles en esta categoría</p>
            </div>
          ) : (
            dataAdopt
              .filter(
                (dataAdopt) => dataAdopt.category === adopt || adopt === "all"
              )
              .map((dataAdopt) => (
                <div className="content-pet" key={dataAdopt.id}>
                  <h4 className="name">{dataAdopt.name}</h4>
                  <div className="img-pets">
                    <svg
                      className="wave-card"
                      viewBox="0 0 800 500"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                      />
                      <path
                        className="card__line"
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="transparent"
                        fill="transparent"
                      />
                    </svg>
                    <img
                      src={dataAdopt.urlImage}
                      className="image"
                      title={dataAdopt.name}
                      alt={dataAdopt.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="info-pet">
                    <span className="age">{dataAdopt.age}</span>
                    <span
                      className={`gender ${
                        dataAdopt.gender === "male" ? "male" : "female"
                      }`}
                    >
                      {dataAdopt.gender === "male" ? "♂" : "♀"}
                    </span>
                    <span className="race">{dataAdopt.race}</span>
                  </div>
                  <button
                    className="adopt"
                    onClick={() => modalOpen(dataAdopt)}
                  >
                    Adoptar
                  </button>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Adopt;
