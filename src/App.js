import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
    </Router>
  );
}

export default App;
