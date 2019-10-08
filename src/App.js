import React from "react";
import "./App.css";
import Button from "./components/button/loginButton";
import Input from "./components/input/inputLogin";
import Message from "./components/message/message";

function App() {
  const state = {artName: ""};

  const onChangeValue = value => {
    state.artName = value;
    console.log(state.artName);
  };
  return (
    <div className="App">
      <Message text="hjkdd" id={1} date="12-04-2032" isAuthor={true} />
      <Input
        name="user"
        value={state.artName}
        placeholder="Password"
        onChangeValue={onChangeValue}
      />
      <Button text="Login" />
    </div>
  );
}

export default App;
