import { React, useState } from "react";
import "./App.css";
import Build from "./Components/Build";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LaunchDate from "./Components/LaunchDate"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Build />
      <LaunchDate />
    </div>
  );
}

export default App;
