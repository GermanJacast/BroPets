import "../../style/lost/modalLost.css";

const ModalLost = ({ lostData, isOpen, onClose }) => {
  const lostDataItem = lostData.length > 0 ? lostData[0] : null;

  const close = () => {
    onClose();
  };

  return (
    <div
      className={`container-modal-adopt ${
        isOpen ? "active-modal" : ""
      }`.trimEnd()}
    >
      {lostDataItem ? (
        <div className="modal">
          <div className="modal-header">
            <h4>Se busca</h4>
            <h4>{lostDataItem.date}</h4>
            <span onClick={close} />
          </div>
          <div className="modal-content">
            <img src={lostDataItem.urlImage} alt={lostDataItem.name} />
            <div className="modal-info">
              <div className="info">
                <div className="data-info">
                  <p>Nombre: </p>
                  <p>{lostDataItem.name}</p>
                </div>
                <div className="data-info">
                  <p>Edad: </p>
                  <p>{lostDataItem.age}</p>
                </div>
                <div className="data-info">
                  <p>Genero: </p>
                  <p>{lostDataItem.gender === "female" ? "Hembra" : "Macho"}</p>
                </div>
                <div className="data-info">
                  <p>Raza: </p>
                  <p>{lostDataItem.race}</p>
                </div>
                <div className="data-info">
                  <p>{lostDataItem.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-button">
              <button className="modal-adopt">
                <a
                  href={`mailto:Contacto@bropets.com?subject=Tengo información sobre ${encodeURIComponent(
                    lostDataItem.name
                  )}&body=He encontrado a ${
                    lostDataItem.gender === "female" ? "la amiga " : "el amigo "
                  }${encodeURIComponent(lostDataItem.name)}, que tiene ${
                    lostDataItem.age
                  } de edad.`}
                >
                  Contactanos
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No se encontraron datos de amigos perdidos</p>
      )}
    </div>
  );
};
export default ModalLost;
