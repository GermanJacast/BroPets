import React from "react";
import "../../style/misc/steps.css";
import StepOne from "../icons/steps/stepOne";
import StepTwo from "../icons/steps/stepTwo";
import StepThree from "../icons/steps/stepThree";

const Stepts = () => {
  return (
    <div className="container-steps">
      <div className="bn-primary-color" />
      <h2>¿Sabes sobre los beneficios de la adopción?</h2>
      <div className="steps">
        <div className="container-step">
          <StepOne />
          <div className="step">
            <h3>Salvar Vidas</h3>
            <p>
              Cada mascota adoptada en BroPets significa una vida rescatada y
              una oportunidad de un futuro mejor.
            </p>
          </div>
        </div>
        <div className="container-step">
          <StepThree />
          <div className="step">
            <h3>Responsabilidad social</h3>
            <p>
              Al adoptar una mascota en lugar de comprar una, estás
              contribuyendo a la causa de rescate y adopción de mascotas,
              promoviendo la responsabilidad social y ayudando a crear
              conciencia sobre la importancia de la adopción.
            </p>
          </div>
        </div>
        <div className="container-step">
          <StepTwo />
          <div className="step">
            <h3>Amor incondicional</h3>
            <p>
              Las mascotas adoptadas son compañeros leales y amorosos que te
              brindarán alegría y compañía todos los días.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepts;
