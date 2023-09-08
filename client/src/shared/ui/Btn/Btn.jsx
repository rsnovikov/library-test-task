import clsx from "clsx";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader.jsx";
import css from "./Btn.module.css";

const Btn = ({ isLoading, children, className, disabled, ...rest }) => {
  return (
    <button
      className={clsx(css.btn, className)}
      disabled={isLoading === true || disabled}
      {...rest}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

Btn.propTypes = {
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Btn;
