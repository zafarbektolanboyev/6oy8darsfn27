import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Login() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function validate() {
    if (userNameRef.current.value.length < 3) {
      alert('Username is not valid');
      userNameRef.current.focus();
      userNameRef.current.style.outlineColor = 'red';
      return false;
    }
    return true;
  }

  function handleLogin(e) {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    const user = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    fetch('https://auth-rg69.onrender.com/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          navigate('/');
        } else {
          alert('Login failed: ' + (data.message || 'Unknown error'));
        }
      })
      .catch(err => {
        console.log('Error:', err);
        alert('Something went wrong! Please try again.');
      });
  }

  return (
    <div className="container form__container">
      <h1>Login Page</h1>
      <form>
        <input ref={userNameRef} type="text" placeholder="Enter Username..." />
        <input ref={passwordRef} type="password" placeholder="Enter Password..." />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
