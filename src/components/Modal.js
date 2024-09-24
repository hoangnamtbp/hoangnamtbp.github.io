import '../styles/Modal.css';

const Modal = ({ isOpen, imageUrl, caption, onClose }) => {
    if (!isOpen) return null; // If modal is not open, don't render anything
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt={caption} className="modal-image" />
          <p className="modal-caption">{caption}</p>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  
  