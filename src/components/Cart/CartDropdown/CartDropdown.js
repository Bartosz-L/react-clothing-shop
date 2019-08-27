import React, { useCallback } from 'react';
import './CartDropdown.scss';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../state/selectors/cartSelectors';
import { toggleCart } from '../../../state/actions/cartActions';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(state => selectCartItems(state));

  const dispatch = useDispatch();
  const handleGoToCheckout = useCallback(() => {
    history.push('/checkout');
    return dispatch(toggleCart());
  }, [dispatch, history]);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
