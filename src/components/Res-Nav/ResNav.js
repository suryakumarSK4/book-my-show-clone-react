import React from "react";
import "./ResNav.css";
function ResNav() {
  return (
    <div className="res-nav ">
      <div className="res-nav-height d-none">
        <div className="res-nav-one">
          <div className="left-res-nav">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "white",
              }}
            >
              It All Starts Here!
            </p>
            <p style={{ fontSize: "12px", color: "#cccccc" }}>Coimbatore ›</p>
          </div>
          <div className="right-res-nav">
            <div className="">
              <button className="res-btn">Use App</button>
            </div>
            <div style={{ height: "24px", width: "24px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  d="M9.5 2a7.5 7.5 0 0 1 5.645 12.438L20.707 20l-.707.707-5.562-5.562A7.5 7.5 0 1 1 9.5 2zm0 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResNav;
