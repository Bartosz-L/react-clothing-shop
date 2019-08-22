import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>

    <div className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/contact">
        CONTACT
      </NavLink>
    </div>
  </div>
);

export default Header;
