import React from 'react';
import CartCard from './CartCard';

export default class CartList extends React.Component {

    render(){
        // console.log(!!this.props.cart ? this.props.cart.map(cart_item => <CartCard key={cart_item.attributes.id} cart_item={cart_item.attributes.item} />) : "Loading Cart...")
        return(
            <div>
				{ !!this.props.cart ? this.props.cart.map( cart_item => <CartCard key={cart_item.attributes.id} cart_item={cart_item.attributes.item} /> ) : "Loading Cart..." }
			</div>
        )
    }
}