import React from 'react';
import { useNavigate } from 'react-router-dom'; // import from react-router-dom
import Cards from '../components/Cards';
import AddProduct from '../components/AddProducts';

function Home() {
  const navigate = useNavigate(); // useNavigate ni chaqirish

  function handleClick(e) {
    e.preventDefault();
    navigate('/register'); // navigate funksiyasidan foydalanish
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
