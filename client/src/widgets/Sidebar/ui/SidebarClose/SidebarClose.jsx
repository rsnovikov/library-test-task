import IconClose from "@/shared/ui/icons/IconClose.jsx";
import PropTypes from "prop-types";
import css from "./SidebarClose.module.css";

const SidebarClose = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.sidebarClose}>
      <IconClose className={css.sidebarCloseIcon} />
    </button>
  );
};

SidebarClose.propTypes = {
  onClick: PropTypes.func,
};

export default SidebarClose;
