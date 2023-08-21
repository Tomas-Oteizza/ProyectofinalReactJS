import carrito from "./images/carrito.png";


function CartWidgets () {
    return (
     <div class='carrito'> 
        <img src={carrito} alt="carrito" />
        <p>3</p>
     </div>
    );
}

export default CartWidgets;