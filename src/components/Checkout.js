import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; 
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label>
          Teléfono
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required 
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required 
          />
        </label>
        <div>
          <button type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: new Date().toISOString(), 
      };

      const productsRef = collection(db, "catalogo"); 

      const docRef = await addDoc(productsRef, objOrder);

      setOrderId(docRef.id); 
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
      clearCart();
    }
  };

  if (loading) {
    return <h1>Pronto tendrá su orden lista, aguarde unos segundos</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

