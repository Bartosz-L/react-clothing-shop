import React, { useCallback } from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';
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
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={handleLogOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/login">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
