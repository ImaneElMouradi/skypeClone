import React, { Component } from "react";
import _ from "lodash";

import "../css/App.css";

import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";

class App extends Component {
  render() {
    const { contacts } = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
