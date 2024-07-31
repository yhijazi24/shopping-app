import React, { useState, useEffect } from 'react';
import './products.css';
import Product from './Product';
import axios from 'axios';

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:3000/api/products?category=${cat}` : 'http://localhost:3000/api/products/'
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);

  return (
    <div className='products-container'>
      {filteredProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
