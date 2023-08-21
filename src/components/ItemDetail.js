import ItemCount from "./ItemCount"


const ItemDetail =({id, name, img, category, description, price, stock}) => {
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
                 <ItemCount initial = {1} stock = {stock} onAdd = {(cantidad) => console.log("cantidad agregada ", cantidad)}/> 
            </footer>
        </article>
    )
}

export default ItemDetail