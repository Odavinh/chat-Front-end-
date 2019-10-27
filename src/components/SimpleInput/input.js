import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./input.css";

const Input = ({onChangeValue, placeholder, name, value, className}) => {
  const changeHandler = e => {
    onChangeValue(e.target.value);
  };

  return (
    <input
      className={classNames(className, "simple-input")}
      placeholder={placeholder}
      type="text"
      name={name}
      defaultValue={value}
      onChange={changeHandler.bind(this)}
    ></input>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeValue: PropTypes.func,
  value: PropTypes.string
};

Input.defaultProps = {
  placeholder: "",
  onChangeValue: () => {},
  value: ""
};

export default Input;
