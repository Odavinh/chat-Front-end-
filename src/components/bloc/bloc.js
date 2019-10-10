import React from "react";
import "./bloc.css";

const bloc = props => {
  return <div className="bloc">{props.children}</div>;
};

export default bloc;
