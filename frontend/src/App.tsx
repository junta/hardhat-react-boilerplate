import React from "react";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./pages/Swap";
import { Pool } from "./pages/Pool";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
      <div className="App flex flex-col base-color items-center text-white min-h-screen text-center">
        <header className="h-20 m-3 mb-10 rounded-lg bg-gray-900 p-5 border-2 gap-1 w-60">
          <ul className="flex justify-between">
            <li className="mr-5">
              <NavLink to="/swap" className="nav-button" activeClassName="border-b-2">
                Swap
              </NavLink>
            </li>
            <li>
              <NavLink to="/pool/" className="nav-button" activeClassName="border-b-2">
                Pool
              </NavLink>
            </li>
          </ul>
        </header>
        <Symfoni autoInit={true}>
          <Switch>
            <Route path="/swap" exact component={Swap} />
            <Route path="/pool" exact component={Pool} />
            <Route exact path="/">
              <Redirect to="/swap" />
            </Route>
          </Switch>
        </Symfoni>
      </div>
    </Router>
  );
};

export default App;
