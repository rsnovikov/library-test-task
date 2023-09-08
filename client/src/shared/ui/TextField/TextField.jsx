import clsx from "clsx";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import css from "./TextField.module.css";

const TextField = forwardRef(
  ({ errorMessage, title, className, name, type = "text", ...rest }, ref) => {
    return (
      <div className={css.textField}>
        {title && (
          <label htmlFor={name} className={css.textFieldLabel}>
            {title}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          className={clsx(css.textFieldInput, className)}
          name={name}
          autoComplete="on"
          formNoValidate={true}
          spellCheck={false}
          type={type}
          {...rest}
        />
        {errorMessage && <ErrorMessage className={css.textFieldError}>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

TextField.propTypes = {
  errorMessage: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextField;
