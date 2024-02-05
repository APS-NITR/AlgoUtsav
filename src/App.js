import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Sponsor from "./Components/Sponsor";
import Header from "./Components/Header";

import "./App.css";
import Layout from "./Components/Layout";

const App = () => {
  
  return (
    <Layout>
      <Header />
      <Home/>
      <About/>
      <Sponsor/>
      </Layout>
    
  );
};

export default App;
