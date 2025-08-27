import React, { useState } from 'react';
import SphereButton from './components/SphereButton';
import InvitationCard from './components/InvitationCard';
import './App.css';

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleSphereClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="hero-card">
          <h1 className="main-title">Ganesh Chaturthi Celebration</h1>
          <p className="subtitle">Click the sphere to open your invitation</p>

          <div className="divider">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
          
          <div className="sphere-container">
            <SphereButton onClick={handleSphereClick} />
          </div>

          <p className="caption">May wisdom and prosperity light your path</p>
        </div>

        {showCard && (
          <InvitationCard
            title="Happy Ganesh Chaturthi"
            subtitle="from TAP ACADEMY"
            quote="✨ Ganpati Bappa Morya ✨"
            blessing="May Lord Ganesha bless you with wisdom and prosperity"
            onClose={handleCloseCard}
          />
        )}
      </div>
    </div>
  );
}

export default App;
