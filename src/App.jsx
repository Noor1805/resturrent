import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/common/SmoothScroll';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </SmoothScroll>
  );
}

export default App;
