import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// FIX: Ensure 'source' matches your folder name exactly. 
// If the folder is actually 'Source' (capital S), this must match [1, 9].
import { ProgressionProvider } from './source/hooks/ProgressionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressionProvider>
      <App />
    </ProgressionProvider>
  </React.StrictMode>
);