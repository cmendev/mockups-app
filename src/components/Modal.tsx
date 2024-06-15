interface ModalProps {
  id?: string;
  title: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, title, message, onConfirm, onCancel }) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
          <button className="btn" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;