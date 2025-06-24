import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="sun">
        <div className="rays"></div>
      </div>
      <h2>Loading Weather...</h2>
    </div>
  );
}
