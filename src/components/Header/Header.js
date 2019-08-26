import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { logOutUser } from '../../state/actions/userActions';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({ currentUser, logOutUser }) => {
  const handleLogOut = () => {
    logOutUser();
  };

  return (
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
        {currentUser ? (
          <div className="option" onClick={handleLogOut}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/login">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Header);
