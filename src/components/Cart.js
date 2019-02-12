import React, { Component } from 'react';

class Cart extends Component {

    render() {
      const productNames = this.props.data.productNamesArray.map((productName, index) => (
        <p 
          key={`productName-${index}`}
          className="test"
          >
            {productName}
        </p>
      ));

      const productPrices = this.props.data.productPricesArray.map((productPrice, index) => (
        <p
          key={`productPrice-${index}`}
          className="test"
        >
          {productPrice}
        </p>
      ));

      const toArrayOfObjects = productNames.map((item, index) => ({
        productNames: productNames[index],
        productPrices: productPrices[index]
       }));
       
      const renderArrayOfObjects = toArrayOfObjects.map((item, key) => (
        <tr key={`test-${key}`}>
          <td>{item.productNames}</td>
          <td>{item.productPrices}</td>
        </tr>
      )); 
        return (
          
          <section>
            <h1>Корзина</h1>
            <table>
              <tr>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Цена со скидкой</th>  
              </tr>
                {renderArrayOfObjects}
              </table>
          </section>
      );
  }
}

export default Cart;