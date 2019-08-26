import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../../assets/bag.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../../state/actions/cartActions';

const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(
  null,
  { toggleCart }
)(CartIcon);
