import { motion } from 'framer-motion';
import { animation2 } from '../animations/variants';

const Challenges = () => (
  <motion.div variants={animation2.container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[1,2,3,4,5,6,7,8].map(i => (
      <motion.div 
        key={i} variants={animation2.item}
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,0,229,0.1)' }}
        className="p-8 border border-[var(--neon-pink)] text-[var(--neon-pink)] cursor-pointer transition-all"
      >
        <div className="text-4xl font-black mb-4 opacity-50">0{i}</div>
        <h4 className="font-bold tracking-tighter">SYNTAX OVERLOAD</h4>
        <p className="text-[10px] mt-2 opacity-80 uppercase">Difficulty: Ultra</p>
      </motion.div>
    ))}
  </motion.div>
);
export default Challenges;
3.4 Progression Page (src/pages/Progression.jsx)
3.5 Community Page (src/pages/Community.jsx)
3.6 Members Page (src/pages/Members.jsx)
3.7 Blog Page (src/pages/Blog.jsx)
3.8 Free Page (src/pages/Free.jsx)
3.9 Founders Page (src/pages/Founders.jsx)
3.10 Campfire Page (src/pages/Campfire.jsx)
3.11 Arena Page (src/pages/Arena.jsx)
3.12 Dashboard Page (src/pages/Dashboard.jsx)
3.13 Ceremony Page (src/pages/Ceremony.jsx)
3.14 Tools Page (src/pages/Tools.jsx)   