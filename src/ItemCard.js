import React from 'react';

export default class ItemCard extends React.Component {

    render(){
        const item = this.props.item.attributes
        return(
            <div className="item_card">
				{ item.name }
                <br />
                <img src={ item.img_url } alt="test_img"/>
                <br />
                Price: { item.price }
                <br />
                Category: { item.category }
                <br />
                Quantity: { item.quantity }
                <br />
                Description: { item.description }
                <br />
                <button>Add To Cart</button>
			</div>
        )
    }
}