import React, { useState } from "react";

import "./Orbit.css";

import Button from "../Button";

import moon from "../images/moon-build.png";
import earth from "../images/orbit_earth.png";
import meo from "../images/initialState/meo-vector.png";
import polar from "../images/initialState/polar-vector.png";
import sunSync from "../images/initialState/sunsync-vector.png";
import leo from "../images/initialState/leo-vector.png";
import gto from "../images/initialState/gto-vector.png";
import esc from "../images/initialState/esc-vector.png";
import geo from "../images/initialState/geo-vector.png";
import OrbitButton from "./OrbitButton";

import gtoClicked from "../images/finalState/gto-clicked.png";
import geoClicked from "../images/finalState/geo-clicked.png";
import meoClicked from "../images/finalState/meo-clicked.png";
import leoClicked from "../images/finalState/leo-clicked.png";
import escClicked from "../images/finalState/esc-clicked.png";
import synClicked from "../images/finalState/syn-clicked.png";
import polarClicked from "../images/finalState/polar-clicked.png";
import OrbitNames from "./OrbitNames";

function Orbit() {
  const [gtoImg, setgtoImg] = useState(gto);
  const [geoImg, setgeoImg] = useState(geo);
  const [meoImg, setmeoImg] = useState(meo);
  const [leoImg, setleoImg] = useState(leo);
  const [escImg, setescImg] = useState(esc);
  const [synImg, setsynImg] = useState(sunSync);
  const [polarImg, setpolarImg] = useState(polar);


  function handlegeo() {
    if (geoImg == geo) {
      console.log(geoImg);
      setgeoImg(geoClicked);
    } else {
      setgeoImg(geo);
    }
  }

  function handlegto() {
    if (gtoImg == gto) {
      setgtoImg(gtoClicked);
    } else {
      setgtoImg(gto);
    }
  }

  function handlemeo() {
    if (meoImg == meo) {
      setmeoImg(meoClicked);
    } else {
      setmeoImg(meo);
    }
  }

  function handleleo() {
    if (leoImg == leo) {
      setleoImg(leoClicked);
    } else {
      setleoImg(leo);
    }
  }

  function handleesc() {
    if (escImg == esc) {
      setescImg(escClicked);
    } else {
      setescImg(esc);
    }
  }

  function handlesyn() {
    if (synImg == sunSync) {
      setsynImg(synClicked);
    } else {
      setsynImg(sunSync);
    }
  }

  function handlepolar() {
    if (polarImg == polar) {
      setpolarImg(polarClicked);
    } else {
      setpolarImg(polar);
    }
  }

  return (
    <div className="orbitDiv">
      <img className="moon-img" src={moon} />
      <img className="earth-img" src={earth} />
      <img className="meo-img" src={meoImg} />
      <img className="polar-img" src={polarImg} />
      <img className="sunSync-img" src={synImg} />
      <img className="leo-img" src={leoImg} />
      <img className="gto-img" src={gtoImg} />
      <img className="esc-img" src={escImg} />
      <img className="geo-img" src={geoImg} />

    <OrbitNames />

      <div className="orbit-content">
        <h2>ORBIT</h2> <br />
        <h3>CORE SERVICE(EAST COAST)</h3>
        <div className="row">
          <OrbitButton handleClick={handlegto}>
            GTO
            <br />
            1800m/s
          </OrbitButton>
        </div>
        <h3>EAST COAST LAUNCH</h3>
        <div className="row">
          <OrbitButton handleClick={handlegto}>
            GTO
            <br />
            1500m/s
          </OrbitButton>
          <OrbitButton handleClick={handlegeo}>GEO</OrbitButton>
          <OrbitButton handleClick={handlemeo}>MEO</OrbitButton>
          <OrbitButton handleClick={handleleo}>LEO</OrbitButton>
          <OrbitButton handleClick={handleesc}>
            EARTH
            <br />
            ESCAPE
          </OrbitButton>
        </div>
        <h3>CORE SERVICE(EAST COAST)</h3>
        <div className="row">
          <OrbitButton handleClick={handlesyn}>
            SUN
            <br />
            SYNC
          </OrbitButton>
          <OrbitButton handleClick={handlepolar}>
            POLAR
            <br />
            {"      "}
          </OrbitButton>
        </div>
        <Button className='orbit-btn'>Next</Button>
      </div>
    </div>
  );
}

export default Orbit;
