import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { connect } from 'react-redux'


function Header(props) {
    return (
        <div class="top">
            <nav class="_header">
                <Link to="/" class="_header_logo">
                    <LocalMallIcon />
                    <span>Online Shop</span>
                </Link>

                <div class="_header_search">
                    <input type="text" name="header_search" id="" />
                    <SearchIcon className="_header_searchIcon" />
                </div>
                <div class="_header_itemList">
                    <Link to="/login">Sign in</Link> |
                <Link to="/products">Products</Link> |
                <Link to="#">Terms</Link> |
                <Link to="#">About</Link>
                </div>
                <div >
                    <Link to="/cart" className="_header_cart">
                        <div class="_header_cartCount">{props.cart?.length}</div>
                        <AddShoppingCartIcon className="_header_cartIcon" />
                    </Link>
                </div>
            </nav>
            <div class="catagories">
                {props.catagories
                    .map((v, i) => <Link to="#"> {v} &nbsp; {i !== (props.catagories?.length - 1) && <span> | </span>}</Link>)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        catagories: state.catagories,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header)