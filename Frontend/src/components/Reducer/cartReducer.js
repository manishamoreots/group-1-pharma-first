import { createSlice, current } from "@reduxjs/toolkit";
import {  user } from "../LocalStorage";
const initialState = { data: { cartItem: [] } };

export const cartSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    getCartItems: (state, action) => {
      let cartItems = JSON.parse(localStorage.getItem("cartItem"));

      if (user && cartItems) {
        state.data = { ...state.data, cartItem: [...cartItems] };
      } else {
        state.data = { ...state.data };
      }
    },
    addToCart: (state, action) => {
      const allItems = state.data.cartItem;
      if (user) {
        const userInfo = {
          ...action.payload,
          userId: user.userId,
          count: 1,
        };
        if (!allItems) {
          let data = [userInfo];
          localStorage.setItem("cartItem", JSON.stringify(data));
        } else if (allItems !== 0) {
          const itemIndex = allItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (itemIndex > -1) {
            allItems[itemIndex].count += 1;
            localStorage.setItem("cartItem", JSON.stringify(allItems));
          } else {
            allItems.push(userInfo);
            localStorage.setItem("cartItem", JSON.stringify(allItems));
          }
        }
      } else {
        state.data = { ...state.data.cartItem };
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.data.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        if (state.data.cartItem[itemIndex].count <= 1) {
          const deleteItem = current(state.data.cartItem).filter(
            (item, index) => index !== itemIndex
          );
          state.data = { cartItem: [...deleteItem] };
          localStorage.setItem("cartItem", JSON.stringify(deleteItem));
        } else {
          state.data.cartItem[itemIndex].count =
            state.data.cartItem[itemIndex].count - 1;
          localStorage.setItem("cartItem", JSON.stringify(state.data.cartItem));
        }
      }
    },
  },
});
export const { getCartItems, addToCart, removeFromCart } = cartSlice.actions;

//
