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

  removeFromCart = (item_index) => {
    console.log(item_index)
    // fetch(`http://localhost:3001/cart_items/${item_index}`, {
    //   method: "DELETE"
    // })
    // .then(res => res.json())
    // .then()
  }

    render(){

        // console.log(this.state.cart)

        const distribute_cart_items = this.state.cart.map((item, index) =>
            <CartCard key={index+1} item={item} cart_item_id={index+1} removeFromCart={this.removeFromCart} />
        )

        return(
            <div>
                {/* { distribute_cart_items } */}
                {(this.state.cart.length === 0) ? "Your Cart Is Currently Empty." : distribute_cart_items }
			</div>
        )
    }
}