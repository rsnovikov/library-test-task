import clsx from "clsx";
import PropTypes from "prop-types";
import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ children, className, error, ...rest }) => {
  const errorMessage = error
    ? error.data?.message || error.message || "Неизвестная ошибка, попробуйте позже"
    : children;

  return (
    <span className={clsx(css.errorMessage, className)} {...rest}>
      {errorMessage}
    </span>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default ErrorMessage;
