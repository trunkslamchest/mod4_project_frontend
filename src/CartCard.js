import React from 'react'

export default class CartCard extends React.Component {

    state = {
        cart_quantity: null
    }

    componentDidMount(){
        fetch(`http://localhost:3001/cart_items/${this.props.item.id}`)
        .then(res => res.json())
        .then(res_obj =>
            this.setState({
                cart_quantity: res_obj.cart_quantity
            })
        )
    }

    onClickFunctionsRemoveFromCart = () => {
        this.props.removeFromCart(this.props)
    }

    onClickFunctionsAddQuantity = () => {
        let quantity = this.state.cart_quantity

        this.setState({
            cart_quantity: quantity += 1
        })
    }

    onClickFunctionsRemoveQuantity = () => {
        let quantity = this.state.cart_quantity

        this.setState({
            cart_quantity: quantity -= 1
        })
    }

    onClickFunctionsUpdateQuantity = () => {
        // if (this.state.cart_quantity === 0) {}
        fetch(`http://localhost:3001/cart_items/${this.props.item.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                cart_quantity: this.state.cart_quantity
            })
        })
    }

    render(){

        const cartItem = this.props.item.attributes.item

        return(
            <div className="item_card">
                { cartItem.name }
                <br />
                <img src={ cartItem.img_url } alt="test_img"/>
                <br />
                Price: { cartItem.price }
                <br />
                Quantity: { this.state.cart_quantity }
                <button onClick={ this.onClickFunctionsAddQuantity }>+</button>
                <button onClick={ this.onClickFunctionsRemoveQuantity }>-</button>
                <button onClick={ this.onClickFunctionsUpdateQuantity }>Update Quantity</button>
                <br />
                <button onClick={this.onClickFunctionsRemoveFromCart }>Remove From Cart</button>
            </div>
        )
    }
}