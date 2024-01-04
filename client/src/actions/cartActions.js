import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART_ITEM, DECREASE_CART_ITEM } from './cartActionTypes';

export const addItemToCart = item => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeCartItem = itemId => ({
    type: REMOVE_FROM_CART,
    payload: { id: itemId },
});

export const increaseCartItem = itemId => ({
    type: INCREASE_CART_ITEM,
    payload: { id: itemId },
});

export const decreaseCartItem = itemId => ({
    type: DECREASE_CART_ITEM,
    payload: { id: itemId },
});
