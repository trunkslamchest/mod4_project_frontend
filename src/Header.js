import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

onClickFunctionsCart = () => {
	this.props.displayCart()
}

onClickFunctionsItems = () => {
	this.props.displayItems()
}

onClickFunctionsLogOut = () => {
	this.props.logOut(this.props.token)
}

	render(){
		return(
			<div>
				<NavLink exact to="/">Home</NavLink>

				{ !!this.props.token ?
					<button onClick={ this.onClickFunctionsLogOut }>Log Out</button>
				:
					""
				}
				{ !!this.props.token ?
					<button onClick={ this.onClickFunctionsCart }>Cart</button>
				:
					""
				}
				{ !!this.props.token ?
					<button onClick={ this.onClickFunctionsItems }>Marketplace</button>
				:
					""
				}
			</div>
		)
	}
}