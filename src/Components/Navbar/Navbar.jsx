import React from "react";
import { NavLink, Route, Link} from "react-router-dom";

import logo from "../../assets/logo.png";
import './NavBar.css';
import Button from "../Button/Button";

function NavBar() {
  return (
    <nav>
      <div className="first">
      <div className='logo'>
        <img src={logo} />
        <span>RockaBuy</span>
      </div>
      </div>
      <div className="second">
       <ul>
        <NavLink activeClassName='active' to='/home'>Home</NavLink>
        <NavLink activeClassName='active'  to='/build'>Build</NavLink>
        <NavLink activeClassName='active'  to='/about'>About</NavLink>
      </ul>
      <div className='cta'>
        <ul>
        <Link to="/login">
        <Button className= "" style={{width: 'fit-content'}}>LeaderBoard</Button>
        </Link>
        </ul>
      </div> 
      </div>
      
    </nav>
  );
}

export default NavBar;
