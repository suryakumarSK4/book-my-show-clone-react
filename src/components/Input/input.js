import React from "react";

function Input({ classname, type }) {
  return (
    <>
      <input className={classname} type={type} />
    </>
  );
}

export default Input;
