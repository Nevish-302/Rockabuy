import React from "react";
import { NavLink, Route, Link} from "react-router-dom";

import logo from "../assets/logo.png";
import './NavBar.css';
import Button from "./Button";

function NavBar() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} />
        <span>RockaBuy</span>
      </div>
      <ul>
        <NavLink activeClassName='active' to='/home'>Home</NavLink>
        <NavLink activeClassName='active'  to='/build'>Build</NavLink>
        <NavLink activeClassName='active'  to='/about'>About</NavLink>
      </ul>
      <div className='cta'>
        <ul>
        <Link to="/login">
        <Button className= "inverted">Log In</Button>
        </Link>
        <Link to="/signup">
        <Button>Sign Up</Button>
        </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
