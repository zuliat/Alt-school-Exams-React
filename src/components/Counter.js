import React, { useState, useEffect } from "react";
//import {useState} from 'react';
import { Link } from "react-router-dom";

function Counter() {
  //useState
  let [value, setValue] = useState(1);
  const handleIncrement = () => {
    setValue(value + 1);
    console.log("Increment was clicked");
  };

  const handleDecrement = (e) => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
    console.log("Decrement was clicked");
  };
  const handleReset = () => {
    setValue(0);
    console.log("Reset was clicked");
  };
  //useEffect
  useEffect(() => {
    console.log("An effect was fired");
    document.title = `Counter is ${value}`;
  }, [value]);

  return (
    <>
      <Link to="/" className="links">
        Back Home
      </Link>

      <Link to="/errorboundary" className="links">
        {" "}
        Go to ErrorBoundary
      </Link>
      <main className="container">
        <h1 className="header">{value}</h1>
        <button onClick={handleIncrement} className="btn">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn">
          Decrement
        </button>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </main>
    </>
  );
}

export default Counter;
