import React, { Component } from 'react';

class Form extends Component {
    state = {
        productName: '',
        productPrice: ''
    };

    handleProductNameChange = event => {
        this.setState({ productName: event.target.value });
    };

    handleProductPriceChange = event => {
        const productPrice = (event.target.validity.valid || event.target.value === "" || event.target.value == null) ? event.target.value : this.state.productPrice;
        this.setState({ productPrice });
        console.log(this.state.productPrice);
    };

    onSubmitHandle = event => {
        event.preventDefault();
        event.target.value = null;
        this.setState({
          productName: '',
          productPrice: ''
        });
        this.props.updateDataWithNewItem(this.state);
      };

      render() {
          return (
            <form onSubmit={this.onSubmitHandle}>
            <label htmlFor="title-field">
              Продукт:
              <textarea
                value={this.state.productName}
                onChange={this.handleProductNameChange}
                id="title-field"
                name="productName"
                placeholder="Например, «Ноутбук»"
                maxLength="100"
                required
                autoFocus
              />
            </label>
    
            <label htmlFor="description-field">
              Цена:
              <input 
                type="text"
                pattern="[0-9]*"
                onChange={this.handleProductPriceChange.bind(this)}
                value={this.state.productPrice}
                id="description-field"
                name="productPrice"
                placeholder="Цена товара"
                required
              />
            </label>
              <button type="submit" value="submit">
                Добавить
              </button>
          </form>
        );
    }
    
}

export default Form;