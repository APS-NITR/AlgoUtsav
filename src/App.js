import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Sponsor from "./Components/Sponsor";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="back bg-cover bg-scroll bg-no-repeat">
      <Header />
      <Home />
      <About />
      <Sponsor /> 
      <Footer />
    </div>
  );
};

export default App;
