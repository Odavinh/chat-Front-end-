import React, {Component} from "react";

import {Input, Button} from "../../../../components/index";

import "./form.css";

class FormSendMsg extends Component {
  state = {message: ""};
  onChangeValue(value) {
    this.setState({message: value});
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState({message: ""});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)} className="form-msg">
          <Input
            name="message"
            onChangeValue={this.onChangeValue.bind(this)}
            placeholder="Write yours message..."
            className="form-input"
          />
          <Button text="Send" />
        </form>
      </div>
    );
  }
}

export default FormSendMsg;
