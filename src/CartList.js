import React from 'react';
import CartCard from './CartCard';

export default class CartList extends React.Component {

    state = {
        cart: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/cart_items")
        .then(response => response.json())
        .then((res_obj) => {

            const filter_items = res_obj.data.filter(item => item.attributes.user.id === parseInt(this.props.user, 10))

            this.setState({
                cart: filter_items.map(item => item.attributes.item)
            })
        })
    }

    render(){

        // console.log(this.state.cart[0])

        const distribute_cart_items = this.state.cart.map((item, index) =>
            <CartCard key={index+1} item={item} cart_item_id={index+1} removeFromCart={this.props.removeFromCart} />
        )

        return(
            <div>
                { distribute_cart_items }
			</div>
        )
    }
}