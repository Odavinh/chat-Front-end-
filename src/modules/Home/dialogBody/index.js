import React, {Component} from "react";

import FormSendMsg from "./formSendMsg/form";
import MessageArea from "./messageArea/messageArea";

class DialogBody extends Component {
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
