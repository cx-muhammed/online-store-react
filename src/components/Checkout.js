import React from 'react'
import './checkout.css'
import { connect } from 'react-redux'
import * as actions from '../actions'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PaymentIcon from '@material-ui/icons/Payment';

function Checkout(props) {
    const itemsInCart = props.cart?.map(item => {
        return (
            <div class="_cartItem">
                <img src={item.image} alt='' />
                <div class="_cartItem_desc">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <h5>{item.price} $</h5>
                </div>
                <DeleteOutlineIcon className="_removeItem" onClick={() => props.removeFromCart(item.id)} />
            </div>
        )
    })

    let total = props.cart?.map(item => item.price).reduce((a, b) => a + b)

    return (
        <div>
            {itemsInCart}
            <div class="checkoutSummary">
                <h1 class="total">Total : {total}$ </h1>
            </div>
            <div class="buyNow">
                 Buy Now <PaymentIcon/>
            </div>

        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDeleteToProps = (dispatch) => {
    return {
        removeFromCart: (id) => { dispatch(actions.removeFromCart(id)) }
    }
}
export default connect(mapStateToProps, mapDeleteToProps)(Checkout)
