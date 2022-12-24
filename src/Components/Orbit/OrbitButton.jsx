import React from "react";

import "./OrbitButton.css";

function OrbitButton(props) {
  return (
      <div className="col-4 orbit-button" onClick={props.handleClick}>
        <p>{props.children}</p>
      </div>
  );
}

export default OrbitButton;
