import React, { Component } from 'react';
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
      <Div>
        <Title>Добавить продукт</Title>
        <Form 
          updateDataWithNewItem={this.updateDataWithNewItem}
          data={this.state}
          />
          <Hr/>
        <Cart
          data={this.state}
        />
      </Div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: grey;
`;

const Hr = styled.hr`
  width: 600px;
`;

const Div = styled.div`
  text-align: center;
`;

export default App;
