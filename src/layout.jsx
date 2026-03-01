import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#00111a] to-[#002b3d] text-white">
      
      {/* Header / Navigation */}
      <header className="w-full py-4 px-6 bg-black/40 backdrop-blur-md border-b border-cyan-400/30">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="text-2xl font-bold tracking-wide text-cyan-300">
            OCEAN TIDE DROP
          </Link>

          <div className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
            <Link to="/arena" className="hover:text-cyan-300 transition">Arena</Link>
            <Link to="/lore" className="hover:text-cyan-300 transition">Lore</Link>
            <Link to="/profile" className="hover:text-cyan-300 transition">Profile</Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-cyan-300/60 border-t border-cyan-400/20">
        © {new Date().getFullYear()} Ocean Tide Drop — Realmwalker Edition
      </footer>
    </div>
  );
}

