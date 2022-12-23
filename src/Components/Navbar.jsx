import React from "react";
import logo from "../assets/logo.png";
import './NavBar.css';
import Button from "./Button";

function NavBar() {
  return (
    <nav>
      <div class='logo'>
        <img src={logo} />
        <span>RockaBuy</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Build</li>
        <li>About</li>
      </ul>
      <div className='cta'>
        <Button class='inverted'>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default NavBar;
