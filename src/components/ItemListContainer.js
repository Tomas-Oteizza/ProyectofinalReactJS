import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "catalogo");
        let productsData;

        if (categoryId) {
          const q = query(collectionRef, where("category", "==", categoryId));
          const querySnapshot = await getDocs(q);
          productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        } else {
          const querySnapshot = await getDocs(collectionRef);
          productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        }

        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
      {/* Agrega aquí la navegación a otros componentes si es necesario */}
    </div>
  );
};

export default ItemListContainer;

