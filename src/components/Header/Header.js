import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
// components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../state/actions/userActions';
import { selectCartHidden } from '../../state/selectors/cartSelectors';
import { selectCurrentUser } from '../../state/selectors/userSelectors';

const Header = () => {
  const currentUser = useSelector(state => selectCurrentUser(state));
  const hidden = useSelector(state => selectCartHidden(state));

  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => dispatch(logOutUser()), [dispatch]);

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
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
