import React from "react";
import Star from "./Star";

function SelSpec(props) {
  return (
    <div className="xspec">
      {props.text}
      <Star />
      <select type="select" className="sel" required={true}>
        {props.options.map(i => <option value={i} key={i}>{i}</option>)}
      </select>
    </div>
  );
}

export default SelSpec;
