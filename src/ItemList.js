import React from 'react'
import ItemCard from './ItemCard'

export default class ItemList extends React.Component {

	state = {
		searchTerm: ''
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
  	}

	onChangeFunctionsFilter = (event) => {
		this.props.filterItems(event)
	}

	render(){

    	const searchedItem = this.props.items.filter(item => item.attributes.name.includes(this.state.searchTerm))

		const distributeItems = searchedItem.map(item =>
			<ItemCard
				key={item.id}
				item={item}
				addToCart={this.props.addToCart}
			/>
		)

		return(
			<div>
				<div>
					<label>
			        	Search: <input value={this.state.searchTerm} onChange={this.handleChange} type="search"/>
			        </label>
			        <label>
			          <strong>Filter:</strong>
			          <select onChange={ this.onChangeFunctionsFilter }>
			            <option value="Shoes">Shoes</option>
			            <option value="Electronics">Electronics</option>
			          </select>
			        </label>
				</div>
				<div className="item_list">
					{ distributeItems }
				</div>
			</div>
		)
	}

}