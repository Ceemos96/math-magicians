import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav-wrapper">
    <Link className="heading-text" to="/home">
      Math Magicians
    </Link>
    <ul className="nav-links">
      <li className="nav-link">
        <Link activeStyle={{ color: 'blue' }} to="home">
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link activeStyle={{ color: 'blue' }} to="/calculator">
          Calculator
        </Link>
      </li>
      <li className="nav-link">
        <Link activeStyle={{ color: 'blue' }} to="/quotes">
          Quote
        </Link>
      </li>
    </ul>
  </div>
);
export default Nav;
