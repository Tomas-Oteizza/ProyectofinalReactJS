import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProductData = async () => {
      try {
        const docRef = doc(db, "catalogo", itemId); // Ajusta la ruta a la ubicación correcta en tu base de datos Firestore
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No se encontró el producto.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    getProductData();
  }, [itemId]);

  return (
    <div className="ItemdetailContainer">
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;


