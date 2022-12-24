import { React, useState } from "react";
import "./App.css";
import Build from "./Components/Build";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Rocket from "./Components/Rocket";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Build />
      <Rocket />
    </div>
  );
}

export default App;
