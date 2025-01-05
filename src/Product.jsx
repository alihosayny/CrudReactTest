import React from "react";

const Product = ({ product, deleteProduct }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default Product;
