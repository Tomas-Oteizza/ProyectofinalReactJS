import {useState} from "react" 

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad , setCantidad] = useState(initial)

    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
    }
  }


const decrement = () => {
    if (cantidad > 1) {
        setCantidad (cantidad - 1)
    }
} 

return (
    <div className="counter">
        <div className="controls">
            <button className="Button" onClick={decrement}> - </button>
            <h5 className="Number">{cantidad}</h5>
            <button className="Button" onClick={increment}> + </button>
        </div>     
        <div>
        <button className="button" onClick={() => onAdd (cantidad)} disabled={!stock}>
            <p>agregar al carrito</p>
        </button>
        </div>  
    </div>
)
}

export default ItemCount
