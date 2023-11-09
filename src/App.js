import React, { useState, useEffect } from 'react';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MatrixRain from './MatrixRain';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const [userTodo, setUserTodo] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    setUserTodo(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete') {
        setTodos(todos.slice(0, todos.length - 1));
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [todos]);


  return (
    <>
    {isLoggedIn && <MatrixRain />}
    {!isLoggedIn ? (
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
    ) : (

      <div className='App__container'>
        <h1>Matrix Todo List</h1>
        <div className='App__form'>
          <input 
          type='text' 
          value={userTodo} 
          onChange={(e) => setUserTodo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && userTodo.trim() !== '') {
              setTodos([...todos, userTodo]);
              setUserTodo('');
            }
          }}
          placeholder='Enter a todo'
          />
          <div className='input-container'>
          <button
          onClick={() => {
            if (userTodo.trim() !== '') {
            setTodos([...todos, userTodo]);
            setUserTodo('');
            }
          }}
          ><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          <button className='show-hide' onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          {isVisible && todos.map((todo, index) => (
            <div 
              key={index} 
              className='todo-item'
              tabIndex={0}
              >
              <p>{todo}</p>
              <button
              onClick={() => {
                setTodos(todos.filter((_, i) => i !== index));
              }}
              >remove Todo</button>
            </div>
          ))}
          <div className="todo-count">
          Total todos: {todos.length}
          </div>
        </div>
      </div>
      )}
    </>
    );
}


export default App;
