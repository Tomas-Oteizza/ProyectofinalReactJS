import carrito from "./images/carrito.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidgets = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <Link to="/Cart" className="cartwidgets" style={{display: totalCantidad > 0 ? 'block': 'none'}}>
            <img className="Cartimg" src={carrito} alt="carrito"/>
            {totalCantidad}
        </Link>
    )
}

export default CartWidgets;