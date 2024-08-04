import React from "react";
import { name, city } from "../data/data.js"; // Ensure this import path is correct

function Home() {
  // Update the JSX being returned to match the requirements
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
