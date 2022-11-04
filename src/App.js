import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import Counter from "./components/Counter";
import Home from "./components/Home";

import Hero from "./components/Hero";
function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/errorboundary" element={<ErrorBoundary />}></Route>
      </Routes>
    </section>
  );
}

export default App;
