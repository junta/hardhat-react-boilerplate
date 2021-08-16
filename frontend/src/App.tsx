import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Symfoni, CurrentAddressContext } from "./hardhat/SymfoniContext";
import { Swap } from "./pages/Swap";
import { Pool } from "./pages/Pool";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";

const App: React.FC = () => {
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
          <Switch>
            <Route path="/" exact component={Swap} />
            <Route path="/pool" exact component={Pool} />
          </Switch>
        </Symfoni>
      </div>
    </Router>
  );
};

export default App;
