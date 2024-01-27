import configureMockStore from "redux-mock-store";
import { addItemToCart } from "../actions/cartActions";
import { ADD_TO_CART } from "../actions/cartActionTypes";
import cartReducer from "../reducers/cartReducer";
import { configureStore } from '@reduxjs/toolkit';

it("should dispatch ADD_TO_CART when a new item is added", () => {
  const mockStore = configureMockStore([]);
  const initialState = { cart: [] };
  const store = mockStore(initialState);

  const newItem = { id: 1, name: "Holiday Box", price: 20, image: "img_url" };

  store.dispatch(addItemToCart(newItem));

  const actions = store.getActions(); // [{ type: 'ADD_TO_CART', payload: { id: 1, name: 'Holiday Box', price: 20, image: 'img_url' }]
  const expectedPayload = { type: ADD_TO_CART, payload: newItem };
  expect(actions).toEqual([expectedPayload]);
});

it("should increment quantity if item exists", () => {
  const mockStore = configureMockStore([]);
  const initialState = {
    cart: [
      { id: 1, name: "Holiday Box", quantity: 1, price: 20, image: "img_url" },
    ],
  };
  const store = mockStore(initialState);

  const existingItem = {
    id: 1,
    name: "Holiday Box",
    price: 20,
    image: "img_url",
  };

  store.dispatch(addItemToCart(existingItem));

  const actions = store.getActions();
  const expectedPayload = {
    type: ADD_TO_CART,
    payload: {
      id: 1,
      name: "Holiday Box",
      price: 20,
      image: "img_url",
    },
  };
  expect(actions).toEqual([expectedPayload]);
});

it("should add a new item to the cart", () => {
  const store = configureStore({ reducer: cartReducer });
  const newItem = { id: 1, name: "Holiday Box", price: 20, image: "img_url" };

  store.dispatch(addItemToCart(newItem));
  const state = store.getState();

  expect(state.items).toContainEqual({ ...newItem, quantity: 1 });
});

it("should increment quantity of an existing item", () => {
  const initialState = {
    items: [
      { id: 1, name: "Holiday Box", quantity: 1, price: 20, image: "img_url" },
    ],
  };
  const store = configureStore({
    reducer: cartReducer,
    preloadedState: initialState,
  });

  const existingItem = {
    id: 1,
    name: "Holiday Box",
    price: 20,
    image: "img_url",
  };
  store.dispatch(addItemToCart(existingItem));
  const state = store.getState();

  expect(state.items).toContainEqual({ ...existingItem, quantity: 2 });
});
