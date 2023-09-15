import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom" 
import { CartContext } from "../context/CartContext"



const ItemDetail =({id, name, img, category, description, price, stock}) => {
    const [cantidadAdded, setCantidadAdded] = useState (0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAdded (cantidad)

        const item = {
            id, name, price
        }

        addItem (item, cantidad)

    } 

    return (
        <article className="CardItem">
            <header className="name">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Marca:  {category}
                </p>
                <p className="Info">
                    description: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="itemfooter">
                 {
                    cantidadAdded > 0 ? (
                        <Link to ="/cart" className = "Option"> Terminar compra </Link>
                    ) : (
                        <ItemCount initial={1} stock = {stock} onAdd={handleOnAdd}/> 
                    )
                 }
            </footer>
        </article>
    )
}

export default ItemDetail