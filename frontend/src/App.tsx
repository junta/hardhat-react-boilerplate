import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Symfoni, CurrentAddressContext, GreeterContext } from "./hardhat/SymfoniContext";
import { Swap } from "./pages/Swap";
import { Pool } from "./pages/Pool";
import { Greeter } from "./components/Greeter";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flex flex-col bg-gray-500 items-center">
        <header className="App-header h-32 mt-3">
          <ul className="flex">
            <li className="mr-5">
              <Link to="/" className="nav-button">
                Swap
              </Link>
            </li>
            <li>
              <Link to="/pool/" className="nav-button">
                Pool
              </Link>
            </li>
          </ul>
        </header>
        <Symfoni autoInit={true}>
          {/*
            <Greeter></Greeter>
            */}
          <Switch>
            <Route path="/" exact component={Swap} />
            <Route path="/pool" exact component={Pool} />
          </Switch>
        </Symfoni>
      </div>
    </Router>
  );
}

export default App;
