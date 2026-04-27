import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import App from './App';
import NovelPage from './NovelPage';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NovelApp() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/novel" element={<NovelPage />} />
      </Routes>
    </Router>
  );
}

export default NovelApp;
