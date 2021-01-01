import React from "react";

const ControlPanel = () => {
  const numbers = Array.from(Array(10).keys());
  return (
    <>
      {numbers.map((number) => (
        <button key={number}>{number}</button>
      ))}
      <button key="cancel">Cancel</button>
      <button key="enter">Enter</button>
    </>
  );
};

export default ControlPanel;
