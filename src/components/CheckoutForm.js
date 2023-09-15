import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const generateOrderId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const orderIdLength = 8;
    let orderId = "";
    for (let i = 0; i < orderIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }
    return orderId;
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    if (!name || !phone || !email) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };

    const orderId = generateOrderId();
    onConfirm({ ...userData, orderId });
  };

  return (
    <div>
      <form onSubmit={handleConfirm}>
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

export default CheckoutForm;
