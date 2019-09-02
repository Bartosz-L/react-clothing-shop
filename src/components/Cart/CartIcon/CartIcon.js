import React from 'react';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../../state/actions/cartActions';
import { selectCartItemsCount } from '../../../state/selectors/cartSelectors';

const CartIcon = () => {
  const itemCount = useSelector(state => selectCartItemsCount(state));

  const dispatch = useDispatch();
  const handleToggleCart = () => dispatch(toggleCart());

  return (
    <CartContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
