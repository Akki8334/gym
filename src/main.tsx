import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure browser resets to signature dark athletic theme
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('effect_fitness_theme');
  } catch {}
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
  document.body.classList.remove('theme-light');
  document.body.classList.add('theme-dark');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
