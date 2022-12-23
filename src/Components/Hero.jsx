import React from "react";
import ring1 from "../assets/rings-1.png";
import ring2 from "../assets/rings-2.png";
import moon from "../assets/moon 1.png";
import distance from "../assets/distance.png";
import rocket from "../assets/Rocket.png";

import "./Hero.css";
import Button from "./Button";
import Box from "./Box";

function Hero() {
  return (
    <React.Fragment>
      <div class="hero">
        <img class="ring1" src={ring2} />
        <img class="ring2" src={ring1} />
        <img class="moon" src={moon} />

        <div class="main-content">
          <div class="distance">
            <img src={distance} />
            <div>
              <p>Moon/Earth</p>
              <h3>384,400 km</h3>
            </div>
          </div>
          <h1>Moon Travel</h1>
          <p>
            Send your customised space rockets to moon and be a part of the
            space<br/> community.
          </p>
          <Button>Get Started</Button>
          <div class='boxes'>
            <Box class='large-box'>
              <img class="rocket" src={rocket} />
              <p>Space Travel</p>
              <span>Stories</span>
            </Box>
            <Box>
              <p>Rocket<br/> Builds</p>
              <span>849</span>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
