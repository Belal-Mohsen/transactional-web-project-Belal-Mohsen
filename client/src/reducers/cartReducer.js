import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART_ITEM, DECREASE_CART_ITEM } from '../actions/cartActionTypes';

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case INCREASE_CART_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case DECREASE_CART_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
