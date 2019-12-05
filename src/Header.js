import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

onClickFunctionsCart = (event) => {
	this.props.click_cart(event)
}

onClickFunctionsLogOut = () => {
	this.props.logOut(this.props.token)
}

	render(){
		// console.log(this.props)
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
			</div>
		)
	}
}