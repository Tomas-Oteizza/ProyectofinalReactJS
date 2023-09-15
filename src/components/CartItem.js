import React from "react";

const CartItem = ({ id, name, cantidad, price }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio por unidad: ${price}</p>
      </div>
      <div className="cart-item-total">
        <h4>Total: ${cantidad * price}</h4>
      </div>
    </div>
  );
};

export default CartItem;
