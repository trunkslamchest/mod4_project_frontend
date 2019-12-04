import React from 'react';
import ItemList from './ItemList';
// import { Route, Switch } from 'react-router-dom'

export default class Home extends React.Component {

  state = {
    items: []
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
        return(
        // <Switch>
        //   <Route exact path="/items">
        //     <ItemList items={ this.state.items } />
        //   </Route>
        // </Switch>
            <ItemList items={ this.state.items } />
        )
    }
}