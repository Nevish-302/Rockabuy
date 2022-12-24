import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Build from "./Components/Build";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Orbit from "./Components/Orbit/Orbit";
import About from "./Components/About";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Route path="/" exact>
          <Hero />
        </Route>

        <Route path="/home">
          <Hero />
        </Route>

        <Route path="/build">
          <Build />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
