import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

onClickCartFunctions = () => {
	this.props.click_cart()
}

onClickFunctions = () => {
	this.props.logOut()
}

	render(){
		// console.log(this.props.cart)
		return(
			<div>
				<NavLink exact to="/">Home</NavLink>

				{
					!!this.props.token ?
					<NavLink exact to="/" onClick={this.onClickFunctions}>Log Out</NavLink>
					:
					""
				}
				{
					!!this.props.token ?
					<NavLink exact to="/cart/"onClick={ this.onClickCartFunctions }>My Cart</NavLink>
					:
					""
				}
			</div>
		)
	}
}