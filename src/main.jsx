import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../fitclub-main/src/App.jsx'
import './index.css'
import { ThemeProvider } from '../fitclub-main/src/context/ThemeContext.jsx'

console.log('Main.jsx is loading...');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
} else {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
  
  console.log('App rendered successfully');
}