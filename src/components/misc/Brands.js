import React from "react";
import "../../style/misc/brands.css";
import { dataBrand } from "../../data/dataBrand";
const Brands = () => {
  return (
    <div className="container-brand">
      <div className="bn-primary-color" />
      <div className="title-brand">
        <h2>Empresas que</h2>
        <div className="flip">
          <div className="flip-flip">
            <div className="text">
              <p>Apoyan</p>
            </div>
            <div className="text">
              <p>Confian</p>
            </div>
            <div className="text">
              <p>Creen</p>
            </div>
            <div className="text">
              <p>Saben</p>
            </div>
          </div>
        </div>
        <h2>lo que hacemos</h2>
      </div>
      <div className="container-slider">
        <div className="slider">
          {dataBrand.map((brand) => (
            <div className="slide" key={brand.id}>
              <img
                src={brand.img}
                alt={brand.name}
                title={brand.name}
                loading="lazy"
              />
            </div>
          ))}
          {dataBrand.map((brand) => (
            <div className="slide" key={brand.id}>
              <img
                src={brand.img}
                alt={brand.name}
                title={brand.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
