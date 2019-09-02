import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../state/selectors/cartSelectors';
import { toggleCart } from '../../../state/actions/cartActions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(state => selectCartItems(state));

  const dispatch = useDispatch();

  const handleGoToCheckout = () => {
    history.push('/checkout');
    dispatch(toggleCart());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={handleGoToCheckout}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
