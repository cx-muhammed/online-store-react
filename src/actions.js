export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}