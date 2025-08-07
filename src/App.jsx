import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Make sure this path is correct based on your structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes like <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
