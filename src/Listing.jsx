// src/Listing.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <>
      {/* Cart Button */}
      <div style={{ textAlign: "right", padding: "20px" }}>
        <Link to="/cart">
          <button>🛒 Go to Cart</button>
        </Link>
      </div>

      <div className="product-list">
        {products.length > 0 ? (
          products.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <div className="card">
                <img src={p.thumbnail} alt={p.title} />
                <h3>{p.title}</h3>
                <p>₹{p.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
}

export default Listing;