import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const totalItems = cartItems.length;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const discount = subtotal > 1000 ? 100 : 0;

  const total = subtotal - discount;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width="120"
              />

              <div>
                <h3>{item.title}</h3>
                <p>{item.brand}</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <hr />

          <h2>Bill Summary</h2>

          <p>Total Items : {totalItems}</p>

          <p>Subtotal : ₹{subtotal}</p>

          <p>Discount : ₹{discount}</p>

          <h3>Total : ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;