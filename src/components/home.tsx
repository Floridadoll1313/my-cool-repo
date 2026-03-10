import React from "react";
import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Hero from "../components/Hero";
import SectorProgressCard from "../components/SectorProgressCard";

export default function Home() {
  const { gameState } = useGame();

  return (
    <div className="home-page">
      <Hero gameState={gameState} />

      {/* Game Status Overview */}
      {gameState.daysSurvived > 0 && (
        <section className="game-status" data-reveal>
          <div className="status-header">
            <h2>🏝️ Current Survival Status</h2>
            <Link to="/island" className="btn btn-primary">
              Continue Adventure →
            </Link>
          </div>
          
          <div className="stats-overview">
            <div className="stat-item">
              <span className="stat-emoji">❤️</span>
              <div className="stat-info">
                <span className="stat-label">Health</span>
                <span className="stat-value">{Math.round(gameState.health)}%</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">🍖</span>
              <div className="stat-info">
                <span className="stat-label">Hunger</span>
                <span className="stat-value">{Math.round(gameState.hunger)}%</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">💧</span>
              <div className="stat-info">
                <span className="stat-label">Thirst</span>
                <span className="stat-value">{Math.round(gameState.thirst)}%</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">⚡</span>
              <div className="stat-info">
                <span className="stat-label">Energy</span>
                <span className="stat-value">{Math.round(gameState.energy)}%</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">⭐</span>
              <div className="stat-info">
                <span className="stat-label">Days Survived</span>
                <span className="stat-value">{gameState.daysSurvived}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sector Progress Cards */}
      <section className="sectors" data-reveal>
        <SectorProgressCard 
          sector={1} 
          explored={gameState.exploredCells.size >= 9}
          resourcesGathered={gameState.inventory.wood + gameState.inventory.stone}
        />
        <SectorProgressCard 
          sector={2} 
          explored={gameState.exploredCells.size >= 17}
          resourcesGathered={gameState.inventory.food + gameState.inventory.water}
        />
        <SectorProgressCard 
          sector={3} 
          explored={gameState.exploredCells.size >= 25}
          resourcesGathered={gameState.inventory.fiber}
          shelterBuilt={gameState.shelter}
          fireBuilt={gameState.fire}
        />
      </section>

      {/* Features Section */}
      <section className="features-section" data-reveal>
        <h2>🎮 Game Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Explore the Island</h3>
            <p>Navigate through diverse terrain, discover hidden resources, and map your surroundings across multiple sectors</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Hunt & Gather</h3>
            <p>Find food, collect water, and gather materials to sustain yourself in the wilderness</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Build & Craft</h3>
            <p>Construct shelters, create tools, and establish your base camp for better survival</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Manage Resources</h3>
            <p>Monitor your health, hunger, thirst, and energy levels to survive as long as possible</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Stay Warm & Safe</h3>
            <p>Build fires for warmth, cooking, and protection from the island's dangers</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Track Progress</h3>
            <p>See how many days you can survive and unlock new sectors as you progress</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {gameState.daysSurvived === 0 && (
        <section className="cta-section" data-reveal>
          <div className="cta-content">
            <h2>Ready to Test Your Survival Skills?</h2>
            <p>Explore the island, gather resources, and see how long you can survive!</p>
            <Link to="/island" className="btn btn-primary btn-large">
              🏝️ Start Your Adventure
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}