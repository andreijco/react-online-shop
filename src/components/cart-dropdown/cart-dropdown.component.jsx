import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem className='cart-item' key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='cart-empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

/*
 * Short version of the same *
 */
// const mapStateToProps = ({cart: {cartItems}}) => ({
//   cartItems
// });

export default withRouter(CartDropdown);
