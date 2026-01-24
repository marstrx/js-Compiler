import { HashRouter, Routes, Route } from "react-router-dom";
import Examples from "../pages/Examples/Examples";
import Home from "../pages/Home/Home";
import Docs from "../pages/Docs/Docs";
import Playground from "../pages/Playground/Playground";
import MainLayout from "../layouts/MainLayout/MainLayout";

export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
