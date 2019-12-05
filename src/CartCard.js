import React from 'react'

export default class CartCard extends React.Component {

    state = {
        cart_quantity: this.props.item.attributes.cart_quantity
    }

    onClickFunctionsRemoveFromCart = () => {
        this.props.removeFromCart(this.props)
    }

    onClickFunctionsAddQuantity = () => {
        this.setState({
            cart_quantity: this.state.cart_quantity += 1
        })
    }

    onClickFunctionsRemoveQuantity = () => {
        this.setState({
            cart_quantity: this.state.cart_quantity -= 1
        })
    }

    onClickFunctionsUpdateQuantity = () => {

        const options = {
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({ cart_quantity: this.state.cart_quantity })
        }
        fetch(`http://localhost:3001/cart_items/${this.props.item.id}`, options)
        .then(this.setState({
            cart_quantity: this.state.cart_quantity
            }, console.log(this.state.cart_quantity))
        )

    }

    render(){
        // console.log(this.state)
        // console.log(this.props.item)
        const cart_item = this.props.item.attributes.item

        return(
            <div className="item_card">
                { cart_item.name }
                <br />
                <img src={ cart_item.img_url } alt="test_img"/>
                <br />
                Price: { cart_item.price }
                <br />
                Quantity: { this.state.cart_quantity }
                <button onClick={ this.onClickFunctionsAddQuantity }>+</button>
                <button onClick={ this.onClickFunctionsRemoveQuantity }>-</button>
                <button onClick={ this.onClickFunctionsUpdateQuantity }>Update Quantity</button>
                <br />
                <button onClick={this.onClickFunctionsRemoveFromCart }>Remove</button>
            </div>
        )
    }
}