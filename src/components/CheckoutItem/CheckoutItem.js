import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles';
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={handleClearItem}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
