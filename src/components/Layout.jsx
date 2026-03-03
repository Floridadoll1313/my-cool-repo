import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/island", label: "Island" },
    { to: "/challenges", label: "Challenges" },
    { to: "/progression", label: "Progression" },
    { to: "/community", label: "Community" },
    { to: "/members", label: "Members" },
    { to: "/blog", label: "Blog" },
    { to: "/free", label: "Free" },
    { to: "/founders", label: "Founders" },
    { to: "/campfire", label: "Campfire" },
    { to: "/arena", label: "Arena" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/ceremony", label: "Ceremony" },
    { to: "/tools", label: "Tools" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-white">

      {/* -------------------------------------------------------
          🌊 CINEMATIC HEADER
      ------------------------------------------------------- */}
      <header className="w-full border-b border-white/10 backdrop-blur-md bg-black/30 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-wide glow-cyan ocean-pulse"
          >
            Ocean Tide Drop
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition ${
                    isActive ? "text-cyan-300" : "text-white/80"
                  } hover:text-cyan-300`
                }
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-300"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/60 backdrop-blur-lg border-t border-white/10">
            <nav className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base py-2 px-3 rounded-md transition ${
                      isActive ? "bg-cyan-500/20 text-cyan-300" : "text-white/80"
                    } hover:bg-cyan-500/10 hover:text-cyan-300`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* -------------------------------------------------------
          🌊 PAGE CONTENT
      ------------------------------------------------------- */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        {children}
      </main>

      {/* -------------------------------------------------------
          🌊 CINEMATIC FOOTER
      ------------------------------------------------------- */}
      <footer className="w-full py-6 text-center text-white/60 text-sm border-t border-white/10">
        <p className="ocean-pulse">© {new Date().getFullYear()} Ocean Tide Drop — A Living Realm</p>
      </footer>
    </div>
  );
}