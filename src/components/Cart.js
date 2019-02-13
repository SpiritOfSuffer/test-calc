import React, { Component } from 'react';

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
       
      const p = this.getPrices(toArrayOfObjects); 
      const renderArrayOfObjects = toArrayOfObjects.map((item, key) => (
       
        <tr key={`test-${key}`}>
          <td>{item.productNames}</td>
          <td>{item.productPrices}</td>
          <td>
            {console.log(p)}
            {item.productPrices.props.children - Math.round(item.productPrices.props.children * this.state.productDiscount / p)}
          </td>
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
              <p>Скидка <input
                type="text"
                pattern="[0-9]*"
                onChange={this.handleProductDiscountChange.bind(this)}
                value={this.state.productDiscount}
                id="description-field"
                name="productPrice"
                placeholder="Введите скидку"
                required
              /></p>
          </section>
      );
  }
}

export default Cart;