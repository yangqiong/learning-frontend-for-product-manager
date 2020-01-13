import React, { Component } from "react";
// import Button1 from "./components/Button1.js";
// import { Button2 } from "./components/Button2.js";
import Button from "./components/Button.js"

class App extends Component {
  render() {
    return (
      <div>
        <Button name="Button1"/>
        <Button name="Button2"/>
      </div>
    );
  }
}

export default App;
