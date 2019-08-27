import React, { useCallback } from 'react';
import './CheckoutItem.scss';
import { useDispatch } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../state/actions/cartActions';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const handleClearItem = useCallback(
    () => dispatch(clearItemFromCart(cartItem)),
    [dispatch, cartItem]
  );

  const handleRemoveItem = useCallback(() => dispatch(removeItem(cartItem)), [
    dispatch,
    cartItem
  ]);

  const handleAddItem = useCallback(() => dispatch(addItem(cartItem)), [
    dispatch,
    cartItem
  ]);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleClearItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
