import React from "react";
import PropTypes from "prop-types";

import "./inputLogin.css";

const Input = props => {
  const changeHandler = e => {
    props.onChangeValue(e.target.value);
  };

  return (
    <div className="inputLabel">
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
  placeholder: PropTypes.string
};

export default Input;
