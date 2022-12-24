import React from "react";

import './OrbitNames.css'

import line1 from '../images/line-images/line1.png'
import line2 from '../images/line-images/line2.png'
import line3 from '../images/line-images/line3.png'
import line4 from '../images/line-images/line4.png'
import line5 from '../images/line-images/line5.png'
import line6 from '../images/line-images/line6.png'
import line7 from '../images/line-images/line7.png'
import line8 from '../images/line-images/line8.png'
import line9 from '../images/line-images/line9.png'
import line10 from '../images/line-images/line10.png'
import line11 from '../images/line-images/line11.png'

function OrbitNames() {
  return (
    <div className="orbit-names">
      <img className="lines l1" src={line1} />
      <p className="names n1">Mare Frigoris</p>

      <img className="lines l2" src={line2} />
      <p className="names n2">Mare Imbrium</p>

      <img src={line3} className="lines l3"/>
      <p className="names n3">
        Oceanus
        <br />
        Procellarum
      </p>

      <img src={line4} className="lines l4"/>
      <p className="names n4">Mare Cognitum</p>
      
      <img src={line5} className="lines l5"/>
      <p className="names n5">Mare Humorum</p>

      <img className="lines l6" src={line6} />
      <p className="names n6">Mare Nubium</p>
      
      <img className="lines l7" src={line7} />
      <p className="names n7">Mare Nectaris</p>
      
      <img className="lines l8" src={line8} />
      <p className="names n8">
        Mare
        <br /> Fecunditatis
      </p>
      
      <img className="lines l9" src={line9} /><p className="names n9">
        Mare <br />
        Tranquilitatis
      </p>
      
      <img className="lines l10" src={line10} />
      <p className="names n10">Mare Crisium</p>
      
      <img className="lines l11" src={line11} />
      <p className="names n11">Mare Serenitatis</p>
    </div>
  );
}

export default OrbitNames;
