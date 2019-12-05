import React from 'react';
import ItemList from './ItemList';
import CartList from './CartList';

export default class ItemsContainer extends React.Component {

  state = {
    cart: [],
    items: [],
    display: true
  }

  componentDidMount(){
    fetch("http://localhost:3001/items")
    .then(response => response.json())
    .then(res_obj =>
      this.setState({
        items: res_obj.data,
      })
    )
  }

  render(){
    const showCart =
        <CartList
          cart={this.props.cart}
        />

    const showItems =
        <ItemList
          addToCart={this.props.addToCart}
          items={ this.state.items }
        />
    return(
      <div>
        {/* {(this.state.display) ? (showCart) : (showItems) } */}
        { showItems }
        {/* { showCart } */}
      </div>
    )
  }
}