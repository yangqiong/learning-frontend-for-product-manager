import React, { Component } from "react";
import Box from "./components/Box.js";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Box>-</Box>
        <div>0</div>
        <Box>+</Box>
      </div>
    )
  }
}

export default App;
