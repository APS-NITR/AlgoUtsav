// Layout.js
// import React from 'react';
import React from 'react';

import StarfieldAnimation from "react-starfield-animation";
// import { loadParticles } from 'react-particles';

// import { tsParticles } from "tsparticles";


// import backgroundImage from '../assets/HomePage.jpg';


const Layout = ({ children }) => {
  
  
  // const containerStyle = {
  //   backgroundImage: `url("https://res.cloudinary.com/ddtzbznea/image/upload/v1709361518/AlgoUtsav/HomePage_cbdgqr.jpg")`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   minHeight: '100vh',
  //   position: 'relative'
  // };

  return (
      <>
      
    {/* <div className="" id="home" style={containerStyle}> 
    
      {children} */}
      
      <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
      numParticles={800}
      particleSpeed={1}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
    />
      
     {/* </div> */}

     

     </> 
      
    
  );
};

export default Layout;
