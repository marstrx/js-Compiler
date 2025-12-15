import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import Examples from '../pages/Examples/Examples';
import Home from '../pages/Home/Home';
import Docs from '../pages/Docs/Docs';
import Playground from '../pages/Playground/Playground';


export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/docs" element={< Docs/>} />
            <Route path="/examples" element={<Examples />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
