import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

onClickFunctionsCart = () => {
	this.props.display_cart()
}

onClickFunctionsItems = () => {
	this.props.display_items()
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
					<button onClick={ this.onClickFunctionsItems }>Items</button>
				:
					""
				}
			</div>
		)
	}
}