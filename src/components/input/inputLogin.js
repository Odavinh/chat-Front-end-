import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./inputLogin.css";

const Input = props => {
  const changeHandler = e => {
    props.onChangeValue(e.target.value, e.target.name);
  };

  return (
    <div className={classNames("inputLabel", props.error ? "error" : "")}>
      <input
        placeholder={props.placeholder}
        type="text"
        name={props.name}
        defaultValue={props.value}
        onChange={changeHandler.bind(this)}
      ></input>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool
};

export default Input;
