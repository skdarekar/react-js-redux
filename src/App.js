import React from 'react';
import logo from './logo.svg';
import './App.css';
import { increment, decrement, login } from './actions';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi there!</h1>
        <h1>Count {counter}</h1>
        <button onClick={()=> dispatch(increment(5))}>+</button>
        <button onClick={ ()=> dispatch(decrement(10))}>-</button>
        {logged?<h3>The Valuable information!</h3>:""}
        <button onClick={()=>dispatch(login())}>Login</button>
      </header>
    </div>
  );
}

export default App;
