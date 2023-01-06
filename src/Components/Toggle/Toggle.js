import React from "react";
import "./Toggle.css";
const Toggle = () => {
  return (
    <>
      <div className="container">
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" name="on" id="on" />
          <label className="label" htmlFor="on">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Toggle;
