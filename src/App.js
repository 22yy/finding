import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterView from "../src/router/routerView";
import routes from "../src/router/index";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView routes={routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
