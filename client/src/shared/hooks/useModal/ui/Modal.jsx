import PropTypes from "prop-types";
import IconClose from "../../../ui/icons/IconClose.jsx";
import css from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  const handleClickOverlay = () => {
    onClose();
  };

  if (!children) return;

  return (
    <div className={css.modalContainer}>
      <div className={css.modalBody}>
        <button type="button" className={css.modalCloseBtn} onClick={() => onClose()}>
          <IconClose />
        </button>
        <div className={css.modalContent}>{children}</div>
      </div>
      <div onClick={handleClickOverlay} className={css.modalOverlay} />
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
