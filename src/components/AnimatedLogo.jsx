import React from 'react';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  return (
    <div className="animated-logo">
      <div className="logo-graphic">
        <div className="sun" />
        <div className="cloud" />
      </div>
      <h2 className="logo-text">SkyView</h2>
    </div>
  );
};

export default AnimatedLogo;
