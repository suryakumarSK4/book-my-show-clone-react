import React from "react";
import { Link } from "react-router-dom";
function links({ address, classname, name, val }) {
  return (
    <div>
      <Link to={address} className={classname} key={val}>
        {name}
      </Link>
    </div>
  );
}

export default links;
