import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.jsx'; 
import Create from './create.jsx'; 
import Gallery from './gallery.jsx'; 
import EditCrewmate from './editCrewmate.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
