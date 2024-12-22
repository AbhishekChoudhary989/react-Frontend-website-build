import React from 'react';
import { Globe2 } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Sell on 1mdm.com</h2>
            <h1>Reach millions of B2B buyers globally</h1>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start selling</button>
              <button className="btn btn-outline">Chat with consultant</button>
            </div>
          </div>
          <div className="hero-image">
            <Globe2 size={48} className="globe-icon" />
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">26,000,000</div>
          <p className="stat-label">active buyers globally</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">400,000</div>
          <p className="stat-label">product inquiries daily</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">200</div>
          <p className="stat-label">countries and regions represented</p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;