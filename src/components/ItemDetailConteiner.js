import { useState, useEffect } from "react"
import { getProducts, getProductById } from "./asyncMock";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product , setProduct] = useState (null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch (error => {
            console.error(error);
        }) 
    }, [itemId]);

    return(
        <div className="ItemdetailConteiner">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer