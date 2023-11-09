import React, { useState } from 'react';
import MatrixRain from './MatrixRain';
import TodoList from './TodoList';
import './components/LoginPage.css';


function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='Login__Page'>
      <MatrixRain />
      {isLoggedIn ? <TodoList /> : (
        <div>
          {
          <form 
        className='login-form'
        onSubmit={() => setIsLoggedIn(true)}>
        <input 
          type="text" 
          placeholder="Username" required />
        <input 
          type="password" 
          placeholder="Password" required />
        <button 
          type="submit">
          Login
        </button>
      </form>
          }
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;