import React from "react";

import "./popup.css";

function popup() {
  return (
    <div className="pop-up d-flex align-center">
      <p style={{ color: "#cccccc", fontSize: "14px" }}>Chennai</p>
      <span className="material-symbols-outlined" style={{ color: "white" }}>
        arrow_drop_down
      </span>
    </div>
  );
}

export default popup;
