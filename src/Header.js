import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

	render(){
		return(
			<div>
				<NavLink exact to="/">Home</NavLink>

				{
				!!this.props.token ?
				<NavLink exact to="/" onClick={this.props.logOut}>Log Out</NavLink>
				:
				""
				}
			</div>
		)
	}
}