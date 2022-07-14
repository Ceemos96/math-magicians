import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <Routes>
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
