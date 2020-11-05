import * as actions from './actions';

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:''},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: ''},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: ''},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:'Item4'},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: 'Item5'},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: 'Item6'}
    ],
    cart:[],
    catagories:['Women','Men','Baby','Shoes','Brands','Computers','Gaming','Phones'],
    total: 0

}

function reducer(state = initState, action) {
    console.log('action fired !! ',action)
    console.log('current state !! ',state)
    switch (action.type) {
        case actions.ADD_TO_CART:
           
            return {
                items:state.items,
                cart : [...state.cart,action.payload],
                catagories : state.catagories,
                total : state.total
            }

        case actions.REMOVE_FROM_CART:
            state.cart = state.cart.filter(v => v.id !== action.id )
            return state;
        default:
            return state;
    }
}

export default reducer