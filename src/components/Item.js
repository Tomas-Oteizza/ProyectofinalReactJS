import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="name">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className="info">
                <p >
                    Precio: ${price}
                </p>
                <p >
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="option"> ver detalle </Link>
            </footer>
        </article>
    );
};
 
export default Item