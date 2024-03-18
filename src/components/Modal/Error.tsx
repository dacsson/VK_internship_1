import "./styles.css";

interface IModalProps
{
  msg: string; // Error message
  setShowModal: Function; // Close modal
}

export const ModalError = ({msg, setShowModal} : IModalProps ) => {
  
  
  return (
    <div className="modal">
      <div className="colored"><h1>🙅</h1></div>
      <div className="dialog">
        <h3>Oh snap!</h3>
        <a>{msg}</a>

        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}
