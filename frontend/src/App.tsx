import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Symfoni,
  CurrentAddressContext,
  GreeterContext,
} from "./hardhat/SymfoniContext";
import { Board } from "./components/Board";
import { Greeter } from "./components/Greeter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true}>
          <Board />

          {/*
          <Greeter></Greeter>
          */}
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
