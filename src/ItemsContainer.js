import React from 'react'
import ItemList from './ItemList'
import CartList from './CartList'

export default class ItemsContainer extends React.Component {

  state = {
    items: [],
    display: null,
    filterTerm: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/items")
    .then(res => res.json())
    .then(res_obj =>
      this.setState({
        items: res_obj.data
      })
    )
  }

	filterItems = (event) => {
		this.setState({
		  items: this.state.items.filter(item => item.attributes.category === event.target.value)
		})
	}

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){

    const showCart =
      <CartList
        user={ this.props.user }
        cart={ this.props.cart }
        removeFromCart={ this.props.removeFromCart }
      />

    const showItems =
      <ItemList
        filterItems={ this.filterItems }
        items={ this.state.items }
        addToCart={this.props.addToCart}
      />
    return(
      <div>
        {(this.props.display === "cart") ? (showCart) : (showItems) }
      </div>
    )
  }

}