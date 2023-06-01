import React, { useState } from "react";
import "../../style/adopt/listAdopt.css";
import Adopt from "./Adopt";
import Footer from "../layout/Footer";
import Wave from "../icons/wave";
import StepAdoptOne from "../icons/steps-adopt/step-adopt-one";
import StepAdoptTwo from "../icons/steps-adopt/step-adopt-two";
import StepAdoptThree from "../icons/steps-adopt/step-adopt-three";

const ListAdopt = () => {
  const steps = [
    {
      number: 1,
      title: "Seleccione a su amigo",
      description:
        "Encuentre al amigo que le robará el corazón en nuestro amplio catálogo de animales en adopción. Conozca sus historias y encuentre la perfecta para su hogar.",
      svg: StepAdoptOne,
    },
    {
      number: 2,
      title: "Póngase en contacto",
      description:
        "Una vez que haya encontrado a su nuevo compañero peludo, póngase en contacto con nosotros para programar una cita. Nuestro equipo de expertos estará a su disposición para guiarlo en todo el proceso.",
      svg: StepAdoptTwo,
    },
    {
      number: 3,
      title: "Cuídalo y ámalo",
      description:
        "Finalmente, lleve a su nuevo amigo a casa y déle todo el amor y cuidado que se merece. Estamos aquí para ayudarle en todo lo que necesite durante su viaje de adopción, así que no dude en comunicarse con nosotros si tiene alguna pregunta o inquietud.",
      svg: StepAdoptThree,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const StepSvg = steps[currentStep].svg;

  const NextStep = () => {
    setCurrentStep(currentStep === steps.length - 1 ? 0 : currentStep + 1);
  };

  const PrevStep = () => {
    setCurrentStep(currentStep === 0 ? steps.length - 1 : currentStep - 1);
  };

  return (
    <div className="container-list-adopt">
      <div className="padd-list-adopt" />

      <div className="why-adopt">
        <div className="bn-secondary-color" />
        <div className="container-text-adopt">
          <h2>¿Por que adoptar en BroPets?</h2>
          <div className="msj">
            <p>
              En BroPets, el proceso de adopción es fácil y gratificante.
              Nuestro equipo de expertos en adopción te guiará en cada paso del
              proceso, desde la selección de la mascota adecuada para tu estilo
              de vida, hasta la preparación de tu hogar y la finalización del
              papeleo necesario. Además, ofrecemos servicios de seguimiento y
              soporte post-adopción para asegurarnos de que tanto tú como tu
              nueva mascota tengan una transición exitosa y feliz.
            </p>
            <p>
              ¡Únete a nuestra comunidad de amantes de las mascotas y descubre
              la alegría de adoptar en BroPets!
            </p>
          </div>
        </div>
      </div>

      <div className="wave wave-bns">
        <Wave />
      </div>

      <div className="container-steps-adopt">
        <div className="bn-primary-color" />
        <h2>Como adoptar a un amigo en simples pasos</h2>
        <div className="steps-adopt">
          <div className="step-content">
            <h2>{steps[currentStep].title}</h2>
            <p>{steps[currentStep].description}</p>
            <div className="step-move">
              <span className="step-prev" onClick={PrevStep} />
              <span className="step-next" onClick={NextStep} />
            </div>
          </div>
          <div className="step-svg">
            <StepSvg preserveAspectRatio="none" />
          </div>
        </div>
      </div>

      <div className="wave wave-bnp">
        <Wave />
      </div>

      <div className="components-adopt">
        <Adopt />
      </div>

      <div className="wave wave-bns">
        <Wave />
      </div>

      <Footer />
    </div>
  );
};

export default ListAdopt;
