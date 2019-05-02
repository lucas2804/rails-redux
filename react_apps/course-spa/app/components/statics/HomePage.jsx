import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("render HomePage");
  return (
    <div>
      <div className="jumbotron">
        <h3>Sidebar</h3>
        <Link to="about" className="btn btn-primary btn-lg">
          {" "}
          About{" "}
        </Link>
      </div>
      <h3>Home Page</h3>
    </div>
  );
};

export default HomePage;
