import React, { useCallback } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../../assets/bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../../state/actions/cartActions';

const CartIcon = () => {
  const itemCount = useSelector(state =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  );

  const dispatch = useDispatch();
  const handleToggleCart = useCallback(() => dispatch(toggleCart()), [
    dispatch
  ]);

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
