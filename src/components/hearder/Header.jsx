import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="header"
      className="bg-secondary-color bg-opacity-50 text-light-color flex justify-between items-center p-5 text-lg font-medium"
    >
      <div className="logo cursor-pointer">
        <Link to="/home">
          &lt;/<span className="logo text-button-color">be</span>
          <span>codeqanda</span>&gt;
        </Link>
      </div>
      {showMenu ? (
        <div id="navbar" className="flex gap-2">
          <Link to="/joinquiz" className="hover:text-button-color">
            Join
          </Link>
          <Link to="/register" className="hover:text-button-color">
            Register
          </Link>
          <Link to="/login" className="hover:text-button-color">
            Login
          </Link>
        </div>
      ) : (
        <button
          id="toggleButton"
          className="focus:outline-none"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="bi bi-list font-bold text-[30px] hover:text-button-color"></i>
        </button>
      )}
    </div>
  );
};

export default Header;
