import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  gameState?: {
    daysSurvived: number;
    health: number;
  };
}

export default function Hero({ gameState }: HeroProps) {
  const hasSavedGame = gameState && gameState.daysSurvived > 0;

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="animated-bg">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          🏝️ AI-Powered Survival Simulation
        </div>

        <h1 className="hero-title">
          <span className="title-main">OTD Survivor Console</span>
          <span className="title-sub">Can You Survive the Island?</span>
        </h1>

        <p className="hero-description">
          Test your survival skills in an AI-powered island simulation. 
          Explore, gather resources, build shelter, and see how long you can last 
          against the elements.
        </p>

        <div className="hero-actions">
          {hasSavedGame ? (
            <>
              <Link to="/island" className="btn btn-primary btn-hero">
                🎮 Continue Game
                <span className="btn-subtitle">Day {gameState.daysSurvived}</span>
              </Link>
              <Link to="/settings" className="btn btn-secondary btn-hero">
                🔄 New Game
              </Link>
            </>
          ) : (
            <>
              <Link to="/island" className="btn btn-primary btn-hero">
                🏝️ Start Adventure
                <span className="btn-subtitle">Begin Your Journey</span>
              </Link>
              <a href="#features" className="btn btn-secondary btn-hero">
                📖 Learn More
              </a>
            </>
          )}
        </div>

        {hasSavedGame && (
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-icon">⭐</span>
              <div className="hero-stat-info">
                <span className="hero-stat-value">{gameState.daysSurvived}</span>
                <span className="hero-stat-label">Days Survived</span>
              </div>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-icon">❤️</span>
              <div className="hero-stat-info">
                <span className="hero-stat-value">{Math.round(gameState.health)}%</span>
                <span className="hero-stat-label">Health</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">↓</div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}