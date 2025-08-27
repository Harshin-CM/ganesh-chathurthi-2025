import React, { useState } from 'react';
import './SphereButton.css';

const SphereButton = ({ onClick, children = 'Click Me' }) => {
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <button
      className="sphere-button"
      onClick={onClick}
      aria-label="Open invitation"
      onMouseMove={handleMouseMove}
      style={{ ['--mx']: mousePos.x, ['--my']: mousePos.y }}
    >
      <span className="aura"></span>
      <span className="ring"></span>
      <span className="orbit orbit-1"></span>
      <span className="orbit orbit-2"></span>
      <span className="orbit orbit-3"></span>
      <span className="label">{children}</span>
    </button>
  );
};

export default SphereButton;
