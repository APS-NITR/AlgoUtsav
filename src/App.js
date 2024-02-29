import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Sponsor from "./Components/Sponsor";
import Header from "./Components/Header";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import Prizes from "./Components/Prizes";
import "./App.css";
import Layout from "./Components/Layout";
import Timeline from "./Components/Timeline";

const App = () => {
  
  return (
    <Layout>
      <Header />
      <Home/>
      <About/>
      <Prizes />
      <Timeline />
      <Sponsor/>
      <FAQ />
      <Footer />
    </Layout>
    
  );
};

export default App;
