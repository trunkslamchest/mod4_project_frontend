import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

	render(){
		console.log(this.props.cart)
		return(
			<div>
				<NavLink exact to="/">Home</NavLink>

				{
				!!this.props.token ?
				<NavLink exact to="/" onClick={this.props.logOut}>Log Out</NavLink>
				:
				""
				}
				{
				!!this.props.token ?
				<NavLink exact to="/cart" render={ this.props.cart }>My Cart</NavLink>
				:
				""
				}
			</div>
		)
	}
}