import React from 'react'
import ItemList from './ItemList'
import CartList from './CartList'
import SearchBar from './SearchBar'

export default class ItemsContainer extends React.Component {

  state = {
    items: [],
    display: null,
    filterTerm: [],
    searchTerm: ''
  }

  sortByFilter = (event) => {
    this.setState({
      fiterTerm: this.state.items.filter(item => item.attributes.category === event)
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
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

    const searchedItem = this.state.items.filter(item => item.attributes.name.includes(this.state.searchTerm))

    const showCart =
      <CartList
        user={ this.props.user }
        cart={ this.props.cart }
        removeFromCart={ this.props.removeFromCart }
      />

    const showItems =
      <ItemList
        // items={ this.state.items }
        // items={ searchedItem }
        items={this.state.filterTerm.length === 0 ? this.state.items : this.state.filterTerm}
        addToCart={this.props.addToCart}
      />
    return(
      <div>
        <label>
          Search: <input value={this.state.searchTerm} onChange={this.handleChange} type="search"/>
        </label>

        <SearchBar
          sortByFilter={this.sortByFilter}
        />

        {(this.props.display === "cart") ? (showCart) : (showItems) }
      </div>
    )

  }
}