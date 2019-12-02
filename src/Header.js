import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

	render(){

		return(
			<div>
				<NavLink exact  to="/">Home</NavLink>
				<NavLink exact  to="/test_1">Test_link_1</NavLink>
				<NavLink exact  to="/test_2">Test_link_2</NavLink>
			</div>
		)
	}
}