import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProductsGlobal: (state, action) => action.payload
  }
})
export const {setProductsGlobal} = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URL = "https://e-commerce-api.academlo.tech/api/v1/products"
  axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))

}