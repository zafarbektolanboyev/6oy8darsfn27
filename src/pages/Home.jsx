import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';
import AddProduct from '../components/AddProducts';

function Home() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/register');
  }

  return (
    <div>
      <AddProduct />
      <Cards />
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Home;
