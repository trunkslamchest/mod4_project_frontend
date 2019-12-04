import React from 'react';
import ItemList from './ItemList';
// import { Route, Switch } from 'react-router-dom'

export default class ItemsContainer extends React.Component {

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
          <ItemList
            addToCart={this.props.addToCart}
            items={ this.state.items }
          />
      )
  }
}