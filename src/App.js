import React from 'react';
import './App.css';
import Header from './Header'
import LogIn from './LogIn'
import Cart from './Cart'
import ItemsContainer from './ItemsContainer'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  state = {
    token: null,
    loggedInUserId: null,
    new_cart: []
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
        new_cart: [...this.state.new_cart, res_obj]
      })
    )
  }

  update_cart = () => {
   fetch("http://localhost:3001/cart_items")
    .then(response => response.json())
    .then((res_obj) => {
      this.setState({
        new_cart: res_obj.filter(item => item.user_id === parseInt(this.state.loggedInUserId, 10))
      })
    })
  }


  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null,
      new_cart: []
    })
  }
  
  click_cart = () => {
    "click cart test"
  }

  render(){
    console.log("UserID", this.state.loggedInUserId)
    console.log("token", this.state.token)
    console.log("new cart", this.state.new_cart)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return (
      <main>
        <div className="Header">
          <Header
            token={ this.state.token }
            click_cart={ this.click_cart }
            logOut={ this.logOut }
          />
        </div>

        <Switch>
          <Route exact path="/cart" component={ Cart } />
        </Switch>

        {
          !!this.state.token ?
            <ItemsContainer
              addToCart={ this.addToCart }
              click_cart={ this.click_cart }
              token={ this.state.token }
              loggedInUserId={ this.state.loggedInUserId }
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

export default App;
