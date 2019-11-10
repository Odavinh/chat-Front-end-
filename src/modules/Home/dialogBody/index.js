import React, {Component} from "react";

import FormSendMsg from "./formSendMsg/form";
import MessageArea from "./messageArea/messageArea";
import {DialogInformation} from "../../../components";

class DialogBody extends Component {
  render() {
    return (
      <div className="dialogBody">
        <DialogInformation
          name={this.props.dialogData[0]}
          lastOnline={this.props.dialogData[1]}
        />
        <MessageArea DialogId={this.props.DialogId} />
        <FormSendMsg DialogId={this.props.DialogId} />
      </div>
    );
  }
}

export default DialogBody;
