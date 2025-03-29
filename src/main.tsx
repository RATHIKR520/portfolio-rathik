import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRout
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById("root")!).render(
    // 2. Wrap App with BrowserRouter
    <BrowserRouter basename="/automated-journey-narrative">
      <App />
    </BrowserRouter>
  );