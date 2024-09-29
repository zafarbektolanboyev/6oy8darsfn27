import React,{useState} from 'react'
import {Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import AddProduct from './components/AddProducts'

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
 };

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
      </Routes>
    </div>
  )
}

export default App
