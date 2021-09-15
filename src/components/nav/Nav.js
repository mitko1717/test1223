import React from "react";

import {
  Switch,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Fruits from "./pages/Fruits";
import Vegs from "./pages/Vegs";
import "./nav.css";

import vegs from "../../f&v/vegsArr";

const Nav = () => {
  return (
    <main>
      <div className="sales">
        <h2>
          <strong> СКИДКА 10% </strong> НА ТОВАР ПРИ КОЛИЧЕСТВЕ 3-Х ЕДИНИЦ
        </h2>
        <h2>
          <strong> СКИДКА 15%</strong> НА ТОВАР ПРИ КОЛИЧЕСТВЕ 5 И БОЛЬШЕ ЕДИНИЦ
        </h2>
      </div>

      <Router>
        <div className="navlinks">
          <ul>
            <NavLink
              activeClassName="selected"
              className="switcher"
              exact
              to="/"
            >
              ОВОЩИ
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="switcher"
              to="/fruits"
            >
              ФРУКТЫ
            </NavLink>
          </ul>
        </div>

        <Switch>
          <Route exact path="/" component={() => <Vegs vegs={vegs} />}></Route>
          <Route
            path="/fruits"
            component={() => <Fruits vegs={vegs} />}
          ></Route>
        </Switch>
      </Router>
    </main>
  );
};

export default Nav;
