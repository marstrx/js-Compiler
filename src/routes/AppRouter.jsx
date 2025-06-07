import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Home from '../pages/Home'; 
import Docs from '../pages/Docs';
import Examples from '../pages/Examples';

export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
