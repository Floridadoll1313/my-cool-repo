const Founders = () => (
  <div className="py-20 flex flex-col items-center">
    <h1 className="text-7xl font-black text-[var(--neon-gold)] tracking-tighter neon-glow-gold">HALL OF ARCHITECTS</h1>
    <div className="grid grid-cols-2 mt-20 gap-20">
      {['THE VISIONARY', 'THE CODER'].map(role => (
        <div key={role} className="flex flex-col items-center">
          <div className="w-48 h-64 border-4 border-[var(--neon-gold)] p-2">
            <div className="w-full h-full bg-zinc-900" />
          </div>
          <p className="mt-6 text-[var(--neon-gold)] font-bold tracking-widest uppercase">{role}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Founders;
