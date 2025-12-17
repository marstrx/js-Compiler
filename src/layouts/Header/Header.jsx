import { useState } from "react";
import { Link } from "react-router-dom";
import jslogo from "/src/assets/JavaScript-logo.png";
import "./Header.css";

function Header() {
  // false until the user click
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-500 text-white fixed w-full top-0 left-0 shadow-md z-50 font-mono">
      <div className="flex justify-between items-center px-4 py-3">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="flex items-center gap-1 no-underline"
        >
          <img
            src={jslogo}
            alt="JS Logo"
            className="w-10 h-10 rounded-full mb-2.5"
          />
          <h4 className="font-mono font-bold text-white">JsCompiler</h4>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-md font-medium">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              className="no-underline text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/playground"
              className=" text-white"
            >
              Playground
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/docs"
              className=" text-white"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/examples"
              className=" text-white"
            >
              Examples
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center px-6 pb-4 gap-3 text-md font-medium">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/playground"
              className=" text-white"
            >
              Playground
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/docs"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/examples"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white"
            >
              Examples
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
