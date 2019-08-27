import React from 'react';
import './CheckoutPage.scss';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice
} from '../../state/selectors/cartSelectors';

const CheckoutPage = () => {
  const cartItems = useSelector(state => selectCartItems(state));
  const total = useSelector(state => selectCartTotalPrice(state));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => cartItem.name)}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
