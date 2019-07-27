import React, { Component } from "react";

import "./css/App.css";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
