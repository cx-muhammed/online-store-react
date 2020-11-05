import React from 'react'
import './home.css'
import Product from './Product'
import { connect } from 'react-redux'
import * as actions from '../actions'



function Home(props) {

    let products = props.items?.map(item => {
        return (
            <Product
                id={item.id}
                title={item.title}
                desc = {item.desc}
                price={item.price}
                priceTag='$'
                rating={item.rating}
                image={item.img}
                clickHandler = {props.addToCart}
            />
        )

    }
    )

    return (
        <div class="_home">
            <div class="_home_banner">
                <img class="_home_bannerBckg" src="https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_1280.jpg" alt="" />
            </div>
            <div class="_home_row container">
                {products}
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (payload) => { dispatch(actions.addToCart(payload)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)