import { React, useState } from "react";
import "./App.css";
import Build from "./Components/Build";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <Build />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
