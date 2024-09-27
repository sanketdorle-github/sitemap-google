import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot, hydrateRoot } from "react-dom/client";
// import App from './App'; // Assuming your main component is App

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // If the root element already has content, use hydrateRoot for SSR (Server-Side Rendering)
  hydrateRoot(rootElement, <App />);
} else {
  // For client-side rendering, use createRoot
  createRoot(rootElement).render(<App />);
}


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
