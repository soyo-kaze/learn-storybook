import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
// Button.propTypes = {
//   variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
// };

export default Button;
