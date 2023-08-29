import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="header" className="bg-secondary-color bg-opacity-50 text-light-color flex justify-between align-middle p-5 text-lg font-medium">
      <div className="logo cursor-pointer">
        <Link to="/home">
          &lt;/<span className="logo text-button-color">be</span>
          <span>codeqanda</span>&gt;
        </Link>
      </div>
      {showMenu ? (
        <button
          id="toggleButton"
          className="focus:outline-none"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {/* ... (your existing code) */}
        </button>
      ) : (
        <div id="navbar" className="flex gap-2">
          <Link to="/home" className="hover:text-button-color">
            Home
          </Link>
          <Link to="/register" className="hover:text-button-color">
            Register
          </Link>
          <Link to="/login" className="hover:text-button-color">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
