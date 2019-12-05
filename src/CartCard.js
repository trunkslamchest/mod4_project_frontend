import React from 'react';

export default class CartCard extends React.Component {

    on_click_functions = () => {
        this.props.removeFromCart(this.props.cart_item_id)
    }

    render(){
        
        // console.log(this.props.cart_item_id)
        console.log(this.props)
        

        const cart_item = this.props.item

        return(
            <div className="item_card">
            { cart_item.name }
            <br />
            <img src={ cart_item.img_url } alt="test_img"/>
            <br />
            Price: { cart_item.price }
            <br />
            Quantity: { cart_item.quantity }
            <br />
            <button onClick={this.on_click_functions }>Remove</button>
            </div>
        )
    }
}