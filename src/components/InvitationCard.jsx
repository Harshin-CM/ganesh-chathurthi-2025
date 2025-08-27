import React from 'react';
import './InvitationCard.css';
import ganeshaImage from '../assets/ganesha.jpg';

const InvitationCard = ({ 
  title = 'Happy Ganesh Chaturthi',
  subtitle = 'from TAP ACADEMY',
  quote = '✨ Ganpati Bappa Morya ✨',
  blessing = 'May Lord Ganesha bless you with wisdom and prosperity',
  iconUrl = null,
  onClose 
}) => {
  return (
    <div className="invitation-overlay" onClick={onClose}>
      <div className="invitation-card" onClick={(e) => e.stopPropagation()}>
        {/* Background Ganesha Image */}
        <div className="ganesha-background">
          <img 
            src={ganeshaImage} 
            alt="Lord Ganesha Background" 
            className="ganesha-bg-image"
            onError={(e) => {
              e.target.style.display = 'none';
              console.log('Ganesha image not found. Please check the image path.');
            }}
          />
        </div>
        
        <div className="card-header">
          {iconUrl ? (
            <img src={iconUrl} alt="Om Symbol" className="om-icon" />
          ) : (
            <div className="om-symbol">ॐ</div>
          )}
        </div>
        
        <div className="card-content">
          <h1 className="card-title">
            <div className="happy-line">
              <span className="happy-text">Happy</span>
            </div>
            <div className="ganesh-chaturthi-line">
              <span className="ganesh-text">Ganesh</span>{' '}
              <span className="chaturthi-text">Chaturthi</span>
            </div>
          </h1>
          
          <h2 className="card-subtitle">{subtitle}</h2>
          
          <div className="card-quote">{quote}</div>
          
          <p className="card-blessing">{blessing}</p>
        </div>
        
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
