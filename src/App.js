import { Header, Test_1, Test_2 } from './export'
// import logo from './logo.svg';

import React from 'react'
import './App.css'
import Home from './Home'
import Error404 from './errors/Error404'
import { Route, Switch } from 'react-router-dom'


export default class App extends React.Component {

  render(){
    return(
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <Switch>
          {/* { */}

          <Route path="/test_1" component={ Test_1 } />
          <Route path="/test_2" component={ Test_2 } />

          <Route exact path="/" component={ Home } />
          <Route component={ Error404 } />

          {/* } */}
        </Switch>
      </div>
    )
  }
}