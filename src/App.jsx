import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/common/SmoothScroll';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Story from './pages/Story';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </Layout>
      </Router>
    </SmoothScroll>
  );
}

export default App;
