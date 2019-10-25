import React, {Component} from "react";
import PropTypes from "prop-types";

import "./form.css";

class FormSendMsg extends Component {
  static propTypes = {
    DialogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired
  };
  render() {
    return (
      <div className="form-msg">
        <input />
        <button />
      </div>
    );
  }
}

export default FormSendMsg;
