import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./inputLogin.css";

const Input = ({error, onChangeValue, placeholder, type, name, value}) => {
  const changeHandler = e => {
    onChangeValue(e.target.value, e.target.name);
  };

  return (
    <div className={classNames("inputLabel", error ? "error" : "")}>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        defaultValue={value}
        onChange={changeHandler.bind(this)}
      ></input>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  type: PropTypes.string
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  onChange: () => {}
};

export default Input;
