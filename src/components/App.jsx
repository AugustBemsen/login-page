import React from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const userIsRegistered = false;
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
