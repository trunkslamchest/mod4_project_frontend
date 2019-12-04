import React from 'react';
import './App.css';
import Header from './Header'
import LogIn from './LogIn'
import ItemsContainer from './ItemsContainer'
// import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  state = {
    token: null,
    loggedInUserId: null,
  }

  componentDidMount(){
    if (!localStorage.userId || !localStorage.token)  {
      localStorage.clear()
    } else {
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.userId
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

  logOut = () => {
    localStorage.clear()

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  render(){
    console.log("UserID", this.state.loggedInUserId)
    console.log("token", this.state.token)
    return (
      <main>
        <div className="Header">
          <Header
            token={ this.state.token }
            logOut={ this.logOut }
          />
        </div>
        {
          !!this.state.token ?
            <ItemsContainer
              token={ this.state.token }
              loggedInUserId={ this.state.loggedInUserId }
            />
            :
            <LogIn
              setToken={ this.setToken }
            />
        }
      </main>
    )
  }
}

export default App;
