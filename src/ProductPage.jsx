// src/ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;