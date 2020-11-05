import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './product.css';
import {addToCart} from '../actions'

function Product({ id, title, price, priceTag, rating, image ,clickHandler}) {
    const clickAction = addToCart;
    return (
        <div class="_product">
            <h4>{title}</h4>
            <img class="_product_image" src={image} alt={title} />

            <div class="_product_price">
                <strong>{price}</strong>
                <small>{priceTag}</small>
            </div>

            <div class="_product_rating">
                {Array(rating)
                    .fill()
                    .map((_) => (<StarIcon />))}

            </div>
            <button type="button" class="btn btn-secondary" onClick={() => clickHandler({id})}>Add to cart</button>
        </div>

    )
}

export default Product
