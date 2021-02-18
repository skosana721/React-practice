import React from "react";
import About from "./about";
import Error from "./error";
import Home from "./home";
import Navbar from "./navbar";

function Index() {
  return (
    <div>
      <h2>React Router</h2>
      <Navbar />
      <Home />
      <About />
      <Error />
    </div>
  );
}

export default Index;
