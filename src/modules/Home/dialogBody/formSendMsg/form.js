import React, {useState} from "react";

import {Input, Button} from "../../../../components/index";

import "./form.css";

const FormSendMsg = () => {
  const [message, setMessage] = useState("");
  const onChangeValue = value => {
    setMessage(value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={submitHandler.bind(this)} className="form-msg">
        <Input
          name="message"
          onChangeValue={onChangeValue.bind(this)}
          placeholder="Write yours message..."
          className="form-input"
        />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default FormSendMsg;
