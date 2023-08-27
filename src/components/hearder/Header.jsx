import React, { useEffect, useState } from "react";

const Header = () => {
  // State to manage whether the menu is shown or not
  const [showMenu, setShowMenu] = useState(false);

  // Effect to update the menu visibility based on window size
  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 768);
    };

    // Call once on component mount to set initial state
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="header" className="bg-secondary-color text-light-color flex justify-between align-middle p-5 text-lg font-medium">
      <div className=" logo cursor-pointer">
        <h1>
          {/* Logo */}
          <a href="/Homepage"></a>
          &lt;/<span className="logo text-button-color">be</span>
          <span>codeqanda</span>&gt;
        </h1>
      </div>
      {showMenu ? (
        // Show menu button on small screens
        <button
          id="toggleButton"
          className="focus:outline-none"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <svg
            className="h-6 w-6 text-light-color hover:text-button-color"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      ) : (
        // Show menu links on larger screens
        <div id="navbar" className="flex gap-2">
          <a href="/Home" className="hover:text-button-color" >
            Home
            </a>
          <a href="/Register" className="hover:text-button-color">
            Register
          </a>
          <a href="/Login" className="hover:text-button-color">
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
