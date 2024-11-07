import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import TitleSection from './components/Tittlesection/TitleSection';
import Footer from './components/Footer/Footer';

// Import your page components
import Introduccion from './pages/Introduccion';
import Funcionamiento from './pages/Funcionamiento';
import MaterialComplementario from './pages/MaterialComplementario';
import Cuestionario from './pages/Cuestionario';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <TitleSection />
      <div className="container">
        <Routes>
          <Route path="/Introduccion" element={<Introduccion />} />
          <Route path="/Funcionamiento" element={<Funcionamiento />} />
          <Route path="/MaterialC" element={<MaterialComplementario />} />
          <Route path="/Cuestionario" element={<Cuestionario />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
