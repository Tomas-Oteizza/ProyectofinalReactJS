import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart, totalCantidad, total } = useContext(CartContext);

  if (totalCantidad === 0) {
    return (
      <div>
        <h1>Tu carrito está vacío.</h1>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <button onClick={() => clearCart()} className="Button">
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="option">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
