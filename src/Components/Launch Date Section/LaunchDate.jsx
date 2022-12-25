import React, { useState } from "react";
import moon from "../images/moon-build.png";
import earth from "../images/earth.png";
import rocket from "../images/rocket.png";

import Button from "../Button/Button";
import "./LaunchDate.css";
import { Link } from "react-router-dom";
import path from "../images/arrow.png";

const LaunchDate = () => {

  return (
    <div className="build-launch">
      <img className="earth" src={earth} alt="" />
      <img className="rocket" src={rocket} alt="" />
      <img className="path" src={path} alt="" />
      <div className="launch-window">
        <h2>PICK A LAUNCH DATE</h2>

        <h3>SELECT A YEAR</h3>
        <Button>2022</Button>
        <Button>2023</Button>
        <Button>2024</Button>
        <h3>SELECT A QUARTER</h3>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button>Q1</Button>
          <Button>Q2</Button>
          <Button>Q3</Button>
          <Button>Q4</Button>
        </div>

        <div className="launch" style={{ float: "right" }}>
          <Link to="/launch" style={{ marginRight: "4rem" }}>
            <Button>Build & Launch</Button>
          </Link>
        </div>
      </div>
      <img className="moon" src={moon} alt="" />
    </div>
  );
};

export default LaunchDate;
