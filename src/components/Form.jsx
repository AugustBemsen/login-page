import React from "react";
import Input from "./Inputs";

function Form(props) {
  return (
    <div>
      <h1>Hello</h1>
      <form className="form">
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
