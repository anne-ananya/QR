import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import ScanPage from './scanpage';
import Saved from './saved';
import About from './about';

const App = () => {
  const [savedLinks, setSavedLinks] = useState([]);

  const deleteLink = (index) => {
    setSavedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <header style={{ backgroundColor: "#FEB624" }}>
        {/* Header content */}
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/scan" element={<ScanPage savedLinks={savedLinks} setSavedLinks={setSavedLinks} />} />
        <Route path="/saved" element={<Saved savedLinks={savedLinks} deleteLink={deleteLink} />} />
        <Route path="/about" element={<About />} />
        {/* Other routes */}
      </Routes>

      {/* Rest of your content */}
    </Router>
  );
};

export default App;
