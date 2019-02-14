import React, { Component } from 'react';
import styled from 'styled-components'

class Cart extends Component {

    state = {
      productDiscount: ''
    }

    handleProductDiscountChange = event => {
      const productDiscount = (event.target.validity.valid || event.target.value === "" || event.target.value == null) ? event.target.value : this.state.productDiscount;
      this.setState({ productDiscount });
      console.log(this.state.productDiscount);
    };

    onSubmitDiscountHandle = event => {
     this.handleProductDiscountChange(event);
    };

    getPrices = arr => {
      let res = 0;
      for(let i = 0; i < arr.length; i++) {
        res += parseInt(arr[i].productPrices.props.children)
      }
      return res;
    }

    render() {
      const productNames = this.props.data.productNamesArray.map((productName, index) => (
        <p 
          key={`productName-${index}`}
          >
            {productName}
        </p>
      ));

      const productPrices = this.props.data.productPricesArray.map((productPrice, index) => (
        <p
          key={`productPrice-${index}`}
        >
          {productPrice} 
        </p>
      ));

      const toArrayOfObjects = productNames.map((item, index) => ({
        productNames: productNames[index],
        productPrices: productPrices[index]
       }));
       
      const prices = this.getPrices(toArrayOfObjects); 
      const renderArrayOfObjects = toArrayOfObjects.map((item, key) => (
        
        <tr key={`product-${key}`}>
          <Td >{item.productNames}</Td>

          <Td>{item.productPrices}</Td>
          <Td>
            {item.productPrices.props.children - Math.round(item.productPrices.props.children * this.state.productDiscount / prices)}
          </Td>
        </tr>
      )); 
        return (
          
          <section>
            <Title>Корзина</Title>
            <Table  align="center">
              <tr>
                <Th>Продукт</Th>
                <Th>Цена</Th>
                <Th>Цена со скидкой</Th>  
              </tr>
                {renderArrayOfObjects}
              </Table>
              <p>Скидка <input
                type="text"
                pattern="[0-9]*"
                onChange={this.handleProductDiscountChange.bind(this)}
                value={this.state.productDiscount}
                placeholder="Введите скидку"
                required
              /></p>
          </section>
      );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: grey;
`;

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`; 

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
`;


export default Cart;