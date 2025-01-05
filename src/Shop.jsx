import React, { useState, useEffect } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log("Fetching initial products...");
    fetchProducts();
  }, []); 
  

  const fetchProducts = () => {
    setProducts([
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Smartphone", price: 800 },
    ]);
  };

  const addProduct = () => {
    if (newProduct && price) {
      setProducts([
        ...products,
        { id: products.length + 1, name: newProduct, price: parseFloat(price) },
      ]);
      setNewProduct("");
      setPrice("");
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="shop">
      <div className="add-product">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProducts}>Add Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
