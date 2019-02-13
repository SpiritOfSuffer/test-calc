import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Cart from './components/Cart';
import styled from 'styled-components'

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
        <Title>Добавить продукт</Title>
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

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: grey;
`;


export default App;
