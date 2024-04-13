// New version, updated for React 18 
//              with createRoot instead of ReactDOM

import React from 'react';
import { createRoot } from 'react-dom/client';

// Add element to the existing HTML content
document.body.innerHTML += '<div id="hi"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('hi'));
root.render(<h2>Hi, React 18!</h2>);
