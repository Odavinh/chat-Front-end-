import React from "react";
import "./App.css";
import {AuthButton, Message, AuthInput} from "./components/index";

function App() {
  const state = {artName: ""};

  const onChangeValue = value => {
    state.artName = value;
    console.log(state.artName);
  };
  return (
    <div className="App">
      <Message text="h" id={1} date="12-04-2032" isAuthor={true} />
      <AuthInput
        name="user"
        value={state.artName}
        placeholder="Password"
        onChangeValue={onChangeValue}
        error={false}
      />
      <AuthButton text="Login" />
    </div>
  );
}

export default App;
