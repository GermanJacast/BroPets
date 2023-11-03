import React, { useState } from "react";
import "../../style/adopt/listAdopt.css";
import "../../style/home.css";
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
        <h3>Como adoptar a un amigo en simples pasos</h3>
        <div className="steps-adopt">
          <div className="step-content">
            <h4>{steps[currentStep].title}</h4>
            <p>{steps[currentStep].description}</p>
            <div className="step-move">
              <span className="step-prev" onClick={PrevStep} />
              <div className="step-number">
                <span>{steps[currentStep].number}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-paw-filled"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke="#fd0061"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 10c-1.32 0 -1.983 .421 -2.931 1.924l-.244 .398l-.395 .688a50.89 50.89 0 0 0 -.141 .254c-.24 .434 -.571 .753 -1.139 1.142l-.55 .365c-.94 .627 -1.432 1.118 -1.707 1.955c-.124 .338 -.196 .853 -.193 1.28c0 1.687 1.198 2.994 2.8 2.994l.242 -.006c.119 -.006 .234 -.017 .354 -.034l.248 -.043l.132 -.028l.291 -.073l.162 -.045l.57 -.17l.763 -.243l.455 -.136c.53 -.15 .94 -.222 1.283 -.222c.344 0 .753 .073 1.283 .222l.455 .136l.764 .242l.569 .171l.312 .084c.097 .024 .187 .045 .273 .062l.248 .043c.12 .017 .235 .028 .354 .034l.242 .006c1.602 0 2.8 -1.307 2.8 -3c0 -.427 -.073 -.939 -.207 -1.306c-.236 -.724 -.677 -1.223 -1.48 -1.83l-.257 -.19l-.528 -.38c-.642 -.47 -1.003 -.826 -1.253 -1.278l-.27 -.485l-.252 -.432c-1.011 -1.696 -1.618 -2.099 -3.053 -2.099z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path
                    d="M19.78 7h-.03c-1.219 .02 -2.35 1.066 -2.908 2.504c-.69 1.775 -.348 3.72 1.075 4.333c.256 .109 .527 .163 .801 .163c1.231 0 2.38 -1.053 2.943 -2.504c.686 -1.774 .34 -3.72 -1.076 -4.332a2.05 2.05 0 0 0 -.804 -.164z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path
                    d="M9.025 3c-.112 0 -.185 .002 -.27 .015l-.093 .016c-1.532 .206 -2.397 1.989 -2.108 3.855c.272 1.725 1.462 3.114 2.92 3.114l.187 -.005a1.26 1.26 0 0 0 .084 -.01l.092 -.016c1.533 -.206 2.397 -1.989 2.108 -3.855c-.27 -1.727 -1.46 -3.114 -2.92 -3.114z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path
                    d="M14.972 3c-1.459 0 -2.647 1.388 -2.916 3.113c-.29 1.867 .574 3.65 2.174 3.867c.103 .013 .2 .02 .296 .02c1.39 0 2.543 -1.265 2.877 -2.883l.041 -.23c.29 -1.867 -.574 -3.65 -2.174 -3.867a2.154 2.154 0 0 0 -.298 -.02z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path
                    d="M4.217 7c-.274 0 -.544 .054 -.797 .161c-1.426 .615 -1.767 2.562 -1.078 4.335c.563 1.451 1.71 2.504 2.941 2.504c.274 0 .544 -.054 .797 -.161c1.426 -.615 1.767 -2.562 1.078 -4.335c-.563 -1.451 -1.71 -2.504 -2.941 -2.504z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
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
