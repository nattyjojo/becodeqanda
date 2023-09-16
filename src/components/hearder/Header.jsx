import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = (props) => {
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
    <nav
      id="header"
      className="bg-secondary-color bg-opacity-50 w-[100%] top-0 text-light-color flex justify-between items-center p-5 text-lg font-medium"
    >
      <div className="logo cursor-pointer text-[1.5rem]">
        <Link to="/">
          &lt;/<span className="logo text-button-color">be</span>
          <span>codeqanda</span>&gt;
        </Link>
      </div>
      {showMenu ? (
        <div id="navbar" className="flex gap-3 text-[1.5rem]">
          <Link to={props.link1} className="hover:text-button-color">
            {props.content1}
          </Link>
          <Link to={props.link2} className="hover:text-button-color">
            {props.content2}
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
    </nav>
  );
};

export default Header;
