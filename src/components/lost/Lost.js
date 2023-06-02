import React, { useState } from "react";
import "../../style/lost/lost.css";
import Plank from "../icons/more/plank-lost";
import SearchPet from "../icons/more/search-pet";
import ModalLost from "./ModalLost";
import { dataLost } from "../../data/dataLost";

const Lost = () => {
  const [lostPet, setLostPet] = useState("all");
  const [lostData, setLostData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = (dataA) => {
    setLostData([dataA]);
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  const [searchLost, setSearchLost] = useState("");
  // search
  const searchLostP = (event) => {
    setSearchLost(event.target.value);
  };
  return (
    <div className="container-lost">
      <div className="bn-secondary-color" />
      <div className="text-lost">
        <SearchPet />
        <div className="text">
          <h3>Has visto a estas mascotas perdidas</h3>
          <p>Únete a nuestra búsqueda</p>
        </div>
      </div>
      <div className="plank">
        <div className="container-category-lost">
          <span className="all-lost" onClick={() => setLostPet("all")}></span>
          <span onClick={() => setLostPet("dog")}></span>
          <span onClick={() => setLostPet("cat")}></span>
        </div>
        <div className="container-search-lost">
          <input
            className="search"
            type="text"
            placeholder="Buscar..."
            onChange={searchLostP}
          />
        </div>
        <Plank />
        <ModalLost lostData={lostData} isOpen={isOpen} onClose={modalClose} />
        <div className="list-lost">
          {dataLost
            .filter(
              (dataLost) => dataLost.category === lostPet || lostPet === "all"
            )
            .filter((dataLost) =>
              dataLost.name.toLowerCase().includes(searchLost.toLowerCase())
            )
            .slice(0, 8)
            .map((dataLost) => (
              <div
                className="content-lost"
                key={dataLost.id}
                onClick={() => modalOpen(dataLost)}
              >
                <div className="info-pet">
                  <h4 className="name">{dataLost.name}</h4>
                  {/* <span className={`gender ${dataLost.gender==='male' ? 'male' : 'female'}`}>{dataLost.gender === 'male' ? '♂' : '♀'}</span> */}
                </div>
                <div className="img-pets">
                  <img
                    src={dataLost.urlImage}
                    className="image"
                    title={dataLost.name}
                    alt={dataLost.name}
                    loading="lazy"
                  />
                </div>
                <div className="info-pet">
                  {/* <span className='age'>{dataLost.age}</span> */}
                  <span className="date">{dataLost.date}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lost;
