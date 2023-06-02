import "../../style/adopt/modalAdopt.css";

const Modal = ({ adoptData, isOpen, onClose }) => {
  const adoptDataItem = adoptData.length > 0 ? adoptData[0] : null;

  const close = () => {
    onClose();
  };

  return (
    <div
      className={`container-modal-adopt ${
        isOpen ? "active-modal" : ""
      }`.trimEnd()}
    >
      {adoptDataItem ? (
        <div className="modal">
          <div className="modal-header">
            <h4>Información de adopción</h4>
            <span onClick={close} />
          </div>
          <div className="modal-content">
            <img
              src={adoptDataItem.urlImage}
              alt={adoptDataItem.name}
              title={adoptDataItem.name}
              loading="lazy"
            />
            <div className="modal-info">
              <div className="info">
                <div className="data-info">
                  <p>Nombre: </p>
                  <p>{adoptDataItem.name}</p>
                </div>
                <div className="data-info">
                  <p>Edad: </p>
                  <p>{adoptDataItem.age}</p>
                </div>
                <div className="data-info">
                  <p>Genero: </p>
                  <p>
                    {adoptDataItem.gender === "female" ? "Hembra" : "Macho"}
                  </p>
                </div>
                <div className="data-info">
                  <p>Raza: </p>
                  <p>{adoptDataItem.race}</p>
                </div>
                <div className="data-info">
                  <p>{adoptDataItem.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-button">
              <button className="modal-adopt">
                <a
                  href={`mailto:Contacto@bropets.com?subject=Quiero adoptar a ${encodeURIComponent(
                    adoptDataItem.name
                  )}&body=Estoy interesado en adoptar a mi ${
                    adoptDataItem.gender === "female" ? "amiga " : "amigo "
                  }${encodeURIComponent(adoptDataItem.name)}, que tiene ${
                    adoptDataItem.age
                  } de edad.`}
                >
                  Contactanos
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div className="modal-header">
            <h4>Información de adopción</h4>
            <span onClick={close} />
          </div>
          <div className="no-data">
            <p>No se encontraron datos de adopción</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
