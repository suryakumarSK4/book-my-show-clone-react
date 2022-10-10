import React from "react";

import "./button.css";

function button({ value, classname, callback }) {
  return (
    <div className="nav-btn">
      <button className={classname} onClick={callback}>
        {value}
      </button>
    </div>
  );
}

export default button;
