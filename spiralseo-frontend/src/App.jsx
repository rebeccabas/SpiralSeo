import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add your routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* etc. */}
      </Routes>
    </Router>
  );
};

export default App;