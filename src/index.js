import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');      // Get the root element from the HTML where the React app will be rendered

const root = createRoot(container);

// Render the App component into the root element
root.render(<App />);
