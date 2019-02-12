import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Добавить продукт</h1>
        <Form />
        <Cart />
      </div>
    );
  }
}

export default App;
