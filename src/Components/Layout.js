// Layout.js
import React from 'react';
// import backgroundImage from '../assets/HomePage.jpg';

const Layout = ({ children }) => {
  const containerStyle = {
    backgroundImage: `url("https://res.cloudinary.com/ddtzbznea/image/upload/v1709361518/AlgoUtsav/HomePage_cbdgqr.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="" id="home" style={containerStyle}>
      {children}
    </div>
  );
};

export default Layout;
