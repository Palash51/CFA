import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';


// import { productListReducer, productDetailsReducer } from './products/productReducers';
// import { cartReducer } from './cart/cartReducer';




const initialState = {};
const reducer = combineReducers({
    // productList: productListReducer,
    // productDetails: productDetailsReducer,
    // cart: cartReducer
})

const composeEnhancers = (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;