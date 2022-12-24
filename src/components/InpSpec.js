import React from "react";
import Star from "./Star";

function InpSpec(props) {
  return (
    <div className="xspec">
      {props.text}
      <Star />
      <input
        type="text"
        className="inp"
        placeholder={props.pt}
        required={true}
      />
      <button>Keyboard</button>
    </div>
  );
}

export default InpSpec;
