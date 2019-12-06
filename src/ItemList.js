import React from 'react'
import ItemCard from './ItemCard'

export default class ItemList extends React.Component {

	render(){

		const distributeItems = this.props.items.map(item =>
			<ItemCard
				key={item.id}
				item={item}
				addToCart={this.props.addToCart}
			/>
		)

		return(
			<div className="item_list">
				{ distributeItems }
			</div>
		)
	}

}