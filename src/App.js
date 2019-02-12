import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Cart from './components/Cart';

class App extends Component {
  state = {
    productNamesArray: [],
    productPricesArray: []
  }

  updateDataWithNewItem = value => {
    this.setState(previousState => ({
      productNamesArray: [value.productName, ...previousState.productNamesArray],
      productPricesArray: [value.productPrice, ...previousState.productPricesArray],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Добавить продукт</h1>
        <Form 
          updateDataWithNewItem={this.updateDataWithNewItem}
          data={this.state}
          />
          <hr/>
        <Cart
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
