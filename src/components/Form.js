import React, { Component } from 'react';
import styled from 'styled-components'

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
            <Label htmlFor="title-field">
              Продукт: <Input
                value={this.state.productName}
                onChange={this.handleProductNameChange}
                id="title-field"
                name="productName"
                placeholder="Например, «Ноутбук»"
                maxLength="100"
                required
                autoFocus
              />
            </Label>
    
            <Label htmlFor="description-field">
              Цена: <Input 
                type="text"
                pattern="[0-9]*"
                onChange={this.handleProductPriceChange.bind(this)}
                value={this.state.productPrice}
                id="description-field"
                name="productPrice"
                placeholder="Цена товара"
                required
              />
            </Label>
              <Button type="submit" value="submit">
                Добавить
              </Button>
          </form>
        );
    }
    
}

const Input = styled.input`
  border: 1px solid #bebebe;
  border-radius: 2px;
  padding: 16px 0px 10px 20px;
  margin: 20px 0 20px 0;
  font-family: inherit;
  resize: none;
  word-break: break-all;
`;

const Label = styled.label`
  margin-left: 10px;
`;

const Button = styled.button`
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  border-radius: 8px;
  font-family: inherit;
  color: #ffffff;
  padding: 10px 20px 24px 20px;
  border: none;
  cursor: pointer;
  height: 40px;
  font: inherit;
  margin-left: 20px;
  &:hover {
    background: #3cb0fd;
    text-decoration: none;
  }
`;



export default Form;