import { useState, useEffect } from "react";

export default function Island() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center px-6 py-16">

      {/* Oceanic glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-blue-900/20 to-black pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-cyan-500/10 blur-[200px] rounded-full pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 max-w-3xl text-center transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-6xl font-extrabold tracking-wide mb-6 drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
          The Island
        </h1>

        <p className="text-xl text-cyan-200/80 leading-relaxed mb-10">
          The first realm of the Ocean Tide Drop.  
          A sanctuary carved from myth and memory — where survivors awaken,
          tides whisper their names, and the journey begins.
        </p>

        {/* Realm Sigil */}
        <div className="mx-auto mb-12 w-40 h-40 rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.3)] flex items-center justify-center">
          <span className="text-5xl font-bold text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            🌀
          </span>
        </div>

        {/* Call to action */}
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-lg shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform">
          Enter the Realm
        </button>
      </div>
    </div>
  );
}
