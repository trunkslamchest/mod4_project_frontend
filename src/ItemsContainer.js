import React from 'react';
import ItemList from './ItemList';
import CartList from './CartList';

export default class ItemsContainer extends React.Component {

  state = {
    items: [],
    display: null
  }

  componentDidMount(){
    fetch("http://localhost:3001/items")
    .then(response => response.json())
    .then(res_obj =>
      this.setState({
        items: res_obj.data
      })
    )
  }

  render(){

    const showCart =
      <CartList
        user={this.props.user}
        cart={this.props.cart}
        removeFromCart={this.props.removeFromCart}
      />

    const showItems =
      <ItemList
        addToCart={this.props.addToCart}
        items={ this.state.items }
      />

    return(
      <div>
        {(this.props.display === "cart") ? (showCart) : (showItems) }
      </div>
    )

  }
}