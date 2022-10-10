import React from "react";
import "./borderLessButton.css";
function borderLessButton() {
  return (
    <div className="mobile-input">
      <div className="inp-wrap">
        <input
          type="text"
          placeholder="Continue with mobile number"
          className="m-num"
        />
      </div>
    </div>
  );
}

export default borderLessButton;
