import React from "react";
import shopping from "../../icon/shopping.png";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shopping} alt="shopping-icon" />
      <span className="cart-count">2</span>
    </div>
  );
};

export default CartIcon;
