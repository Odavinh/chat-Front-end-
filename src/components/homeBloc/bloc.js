import React from "react";
import PropType from "prop-types";
import classNames from "classnames";
import "./bloc.css";

const HomeBloc = ({children, className}) => {
  return <div className={classNames("Home-bloc", className)}>{children}</div>;
};

HomeBloc.propType = {
  children: PropType.element
};

HomeBloc.defaultProps = {
  children: null
};

export default HomeBloc;
