import React from "react";
import "./nav.css";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="search">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="saved">
          Saved
        </a>
      </li>
    </ul>
  );
}

export default Nav;
