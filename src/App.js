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
        cart: this.update_cart()
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
      item_id: item
    })
   })
   .then(response => response.json())
   .then(res_obj =>
      this.setState({
        cart: [...this.state.cart, res_obj]
      })
    )
  }

  removeFromCart = (item_index) => {
    console.log(item_index)
  }

  update_cart = () => {
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
    // console.log("cart", this.state.new_cart)
    // console.log("display", this.state.display)
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return (
      <main>
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
            />
            :
            <LogIn
              setToken={ this.setToken }
              update_cart={ this.update_cart }
            />
        }
      </main>
    )
  }
}
