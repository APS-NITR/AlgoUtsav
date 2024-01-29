import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Sponsor from "./Components/Sponsor";
import Header from "./Components/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Sponsor/>
    </>
  );
};

export default App;
