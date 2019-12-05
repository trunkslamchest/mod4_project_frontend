import React from 'react';

export default class CartCard extends React.Component {

    render(){

        const cart_item = this.props.cart_item

        return(
            <div className="item_card">
            { cart_item.name }
            <br />
            <img src={ cart_item.img_url } alt="test_img"/>
            <br />
            Price: { cart_item.price }
            <br />
            Category: { cart_item.category }
            <br />
            Quantity: { cart_item.quantity }
            <br />
            Description: { cart_item.description }
            <br />
            </div>
        )
    }
}