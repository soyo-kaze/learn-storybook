import React from "react";
import "./Input.css";

const Input = (props) => {
  const { size, ...rest } = props;
  return <input type="text" className={size} {...rest} />;
};

export default Input;
