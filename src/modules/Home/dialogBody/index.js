import React, {Component} from "react";
import PropTypes from "prop-types";

import FormSendMsg from "./formSendMsg/form";
import MessageArea from "./messageArea/messageArea";

class DialogBody extends Component {
  static propTypes = {
    DialogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired
  };
  render() {
    return (
      <div className="dialogBody">
        <MessageArea DialogId={this.props.DialogId} />
        <FormSendMsg DialogId={this.props.DialogId} />
      </div>
    );
  }
}

export default DialogBody;
