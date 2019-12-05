import React from 'react';
import './App.css';
import Header from './Header'
import LogIn from './LogIn'
import ItemsContainer from './ItemsContainer'
// import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {

  state = {
    token: null,
    loggedInUserId: null,
    cart: [],
    display: null,
  }

  componentDidMount(){
    if (!localStorage.userId || !localStorage.token)  {
      localStorage.clear()
    } else {

      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.userId,
        cart: this.updateCart()
      })
    }
  }

  setToken = ({ token, user_id })  =>{

    localStorage.token = token
    localStorage.userId = user_id

    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  addToCart = (item) => {
   fetch("http://localhost:3001/cart_items", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      user_id: this.state.loggedInUserId,
      item_id: item,
      cart_quantity: 1
    })
   })
   .then(response => response.json())
   .then(res_obj =>
      this.setState({
        cart: this.updateCart()
      })
    )
  }

  removeFromCart = (cart_item) => {
    fetch(`http://localhost:3001/cart_items/${cart_item.item.id}`, {
      method: "DELETE"
    })
    .then(
      this.setState({
        cart: this.state.cart.filter(item => item.id !== cart_item.item.id)
      })
    )
  }

  updateCart = () => {
   fetch("http://localhost:3001/cart_items")
    .then(response => response.json())
    .then((res_obj) => {
      this.setState({
        cart: res_obj.data.filter(item => item.attributes.user.id === parseInt(this.state.loggedInUserId, 10))
      })
    })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null,
      cart: []
    })
  }

  display_cart = () => {
    this.setState({
      display: "cart"
    })
  }

  display_items = () => {
    this.setState({
      display: "items"
    })
  }

  render(){
    // console.log("UserID", this.state.loggedInUserId)
    // console.log("token", this.state.token)
    // console.log("cart", this.state.cart)
    // console.log("display", this.state.display)
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return (
      <div>
        <div className="Header">
          <Header
            token={ this.state.token }
            display_cart={ this.display_cart }
            display_items={ this.display_items }
            logOut={ this.logOut }
          />
        </div>

        {
          !!this.state.token ?
            <ItemsContainer
              token={ this.state.token }
              user={ this.state.loggedInUserId }
              display={ this.state.display }
              cart={this.state.cart}
              addToCart={ this.addToCart }
              removeFromCart={ this.removeFromCart }
              updateCart = { this.updateCart}
            />
            :
            <LogIn
              setToken={ this.setToken }
              updateCart={ this.updateCart }
            />
        }
      </div>
    )
  }
}
