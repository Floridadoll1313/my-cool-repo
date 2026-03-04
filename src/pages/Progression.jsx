import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Progression = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ height: '20px', backgroundColor: '#4caf50' }}
      />
      <p>{`Progress: ${progress}%`}</p>
    </div>
  );
};

export default Progression;
                            
