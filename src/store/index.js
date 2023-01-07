import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice"
import userInfo from "./slices/userInfo.slice"
import cart from "./slices/cart.slice"

export default configureStore({
  reducer: {
    products,
    userInfo,
    cart
  }
})