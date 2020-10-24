import axios from 'axios';

import { CART_ADD_ITEM, CART_ADD_ITEM_ERROR, CART_REMOVE_ITEM } from './actionType';


export const addToCart = (productId, qty) => async (dispatch, getState) => {
    
    try {
        const { data } = await axios.post("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
              product: data._id,
              name: data.name,
              image: data.image,
              price: data.price,
              countInStock: data.countInStock,
              qty: qty
            }
          });
        const { cart: { cartItems }} = getState();
        
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message });
    }
}

export const removeFromCart = (productId: string) => async (dispatch, getState:any) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId })
  const { cart: { cartItems }} = getState();
}
