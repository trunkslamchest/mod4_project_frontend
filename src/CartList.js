import React from 'react';
import CartCard from './CartCard';

export default class CartList extends React.Component {

    render(){

        const distribute_cart_items = this.props.cart.map((item, index) =>
            <CartCard
                key={index}
                item={item}
                removeFromCart={this.props.removeFromCart}
            />
        )

        return(
            <div>
                { distribute_cart_items }
            </div>
        )
    }
}