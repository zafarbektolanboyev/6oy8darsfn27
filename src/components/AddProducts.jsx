import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct({ addProduct }) {
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      description: descriptionRef.current.value,
    };
    fetch('https://auth-rg69.onrender.com/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add product');
        }
        return response.json();
      })
      .then(data => {
        addProduct(newProduct);
        navigate('/');
      })
      .catch(error => {
        setErrorMessage('Error adding product: ' + error.message);
      });
  };
  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Product Name" required />
        <input ref={priceRef} type="number" placeholder="Product Price" required />
        <textarea ref={descriptionRef} placeholder="Product Description" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
