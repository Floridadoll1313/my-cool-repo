import React from 'react';
import { Link } from 'react-router-dom';

interface SectorProgressCardProps {
  sector: 1 | 2 | 3;
  explored?: boolean;
  resourcesGathered?: number;
  shelterBuilt?: boolean;
  fireBuilt?: boolean;
}

const SECTOR_DATA = {
  1: {
    name: 'Beach Sector',
    icon: '🏖️',
    description: 'Start your journey on the sandy shores',
    color: '#3498db',
    features: ['Fresh water sources', 'Basic resources', 'Safe exploration'],
    unlockRequirement: 'Available from start',
  },
  2: {
    name: 'Forest Sector',
    icon: '🌲',
    description: 'Venture into the dense wilderness',
    color: '#27ae60',
    features: ['Abundant wood', 'Wildlife hunting', 'Hidden treasures'],
    unlockRequirement: 'Explore 9+ cells',
  },
  3: {
    name: 'Mountain Sector',
    icon: '⛰️',
    description: 'Conquer the treacherous peaks',
    color: '#8e44ad',
    features: ['Stone deposits', 'Rare resources', 'Vantage points'],
    unlockRequirement: 'Explore 17+ cells',
  },
};

export default function SectorProgressCard({ 
  sector, 
  explored = false,
  resourcesGathered = 0,
  shelterBuilt = false,
  fireBuilt = false,
}: SectorProgressCardProps) {
  const data = SECTOR_DATA[sector];
  
  // Calculate completion percentage
  const calculateProgress = () => {
    let progress = 0;
    if (explored) progress += 25;
    if (resourcesGathered > 0) progress += 25;
    if (resourcesGathered > 50) progress += 25;
    if (sector === 3) {
      if (shelterBuilt) progress += 15;
      if (fireBuilt) progress += 10;
    } else {
      if (resourcesGathered > 100) progress += 25;
    }
    return Math.min(progress, 100);
  };

  const progress = calculateProgress();
  const isLocked = sector === 2 && !explored && resourcesGathered === 0;
  const isUnlocked = explored || resourcesGathered > 0;

  return (
    <div 
      className={`sector-card ${isLocked ? 'sector-locked' : ''} ${isUnlocked ? 'sector-unlocked' : ''}`}
      style={{ '--sector-color': data.color } as React.CSSProperties}
    >
      <div className="sector-header">
        <div className="sector-icon">{data.icon}</div>
        <div className="sector-title">
          <h3>{data.name}</h3>
          <span className="sector-number">Sector {sector}</span>
        </div>
        {isLocked && (
          <div className="sector-lock">🔒</div>
        )}
      </div>

      <p className="sector-description">{data.description}</p>

      <div className="sector-progress">
        <div className="progress-header">
          <span>Progress</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%`, backgroundColor: data.color }}
          ></div>
        </div>
      </div>

      <div className="sector-features">
        <h4>Features:</h4>
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="sector-stats">
        {explored && (
          <div className="sector-stat">
            <span className="stat-icon">✅</span>
            <span className="stat-text">Explored</span>
          </div>
        )}
        {resourcesGathered > 0 && (
          <div className="sector-stat">
            <span className="stat-icon">📦</span>
            <span className="stat-text">{resourcesGathered} Resources</span>
          </div>
        )}
        {sector === 3 && shelterBuilt && (
          <div className="sector-stat">
            <span className="stat-icon">🏠</span>
            <span className="stat-text">Shelter Built</span>
          </div>
        )}
        {sector === 3 && fireBuilt && (
          <div className="sector-stat">
            <span className="stat-icon">🔥</span>
            <span className="stat-text">Fire Active</span>
          </div>
        )}
      </div>

      <div className="sector-footer">
        {isLocked ? (
          <div className="sector-unlock-requirement">
            <span className="lock-icon">🔒</span>
            <span>{data.unlockRequirement}</span>
          </div>
        ) : (
          <Link to="/island" className="btn btn-sector">
            {explored ? 'Continue Exploring' : 'Start Exploring'} →
          </Link>
        )}
      </div>
    </div>
  );
}