// src/pages/Island.jsx
import React from "react";
import Layout from "../components/Layout";
import "./Island.css";

export default function Island() {
  return (
    <Layout>
      <div className="island-container">

        {/* HERO */}
        <section className="island-hero">
          <div className="island-hero-overlay" />
          <h1 className="island-title">The Survivor’s Island</h1>
          <p className="island-subtitle">
            Your sanctuary. Your proving ground. Your tide‑bound home.
          </p>
        </section>

        {/* SECTIONS */}
        <section className="island-grid-section">
          <h2 className="section-title">Island Sectors</h2>

          <div className="island-grid">
            <div className="island-card">
              <h3>🌊 Shoreline</h3>
              <p>The first steps of your journey — grounding, breath, and clarity.</p>
            </div>

            <div className="island-card">
              <h3>🔥 Forge</h3>
              <p>Where skills are shaped, sharpened, and tested against the tide.</p>
            </div>

            <div className="island-card">
              <h3>🌙 Depth</h3>
              <p>Reflection, meaning, and the mythic layers beneath your path.</p>
            </div>

            <div className="island-card">
              <h3>⚔️ Arena</h3>
              <p>Challenges, trials, and the moments that define your ascent.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="island-cta">
          <h2 className="cta-title">Return to the Tide</h2>
          <p className="cta-desc">
            Every step you take on the Island shapes the Realm itself.
          </p>
          <button className="cta-button">Enter the Island</button>
        </section>

      </div>
    </Layout>
  );
}
