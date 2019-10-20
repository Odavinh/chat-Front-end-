import React, {Component} from "react";
import PropType from "prop-types";
import "./bloc.css";

class Bloc extends Component {
  static propType = {
    children: PropType.element
  };
  static defaultProps = {
    children: null
  };
  render() {
    return <div className="Home-bloc">{this.props.children}</div>;
  }
}

export default Bloc;
