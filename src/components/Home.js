import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-container">Welcome to my Counter App...</section>

      <Link to="errorboundary" className="links">
        {" "}
        Go to ErrorBoundary
      </Link>
      <Link to="/counter" className="links">
        Go to Counter
      </Link>
    </>
  );
};

export default Home;
