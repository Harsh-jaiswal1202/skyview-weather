import React from 'react';

export default function InfoBox({ label, value }) {
  return (
    <div className="info-box">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  );
}
