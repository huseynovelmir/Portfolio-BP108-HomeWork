import React from "react";
import { FaSun } from "react-icons/fa6";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <h2>devfinder</h2>
        <button class="darkLightMode">
          <p class="mode">LIGHT</p>
          <FaSun className="icon" />
        </button>
      </header>
    </>
  );
}

export default Header;
