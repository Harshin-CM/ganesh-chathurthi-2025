import React from 'react';
import './FestiveBackdrop.css';

const FestiveBackdrop = () => {
  return (
    <div className="festive-backdrop" aria-hidden="true">
      <div className="toran top toran-left"></div>
      <div className="toran top toran-right"></div>

      <div className="diya-row">
        <span className="diya"></span>
        <span className="diya"></span>
        <span className="diya"></span>
      </div>

      <div className="confetti confetti-1"></div>
      <div className="confetti confetti-2"></div>
      <div className="confetti confetti-3"></div>
    </div>
  );
};

export default FestiveBackdrop;
