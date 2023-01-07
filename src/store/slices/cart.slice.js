import { createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { getConfig } from "../../utils/configAxios";

const BASE_URL = "https://e-commerce-api.academlo.tech/api/v1/";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartGlobal: (state, action) => action.payload
  }
})

export const {setCartGlobal} = cartSlice.actions

export default cartSlice.reducer

export const getAllCartProduct = () => (dispatch) => {  
  const URL = `${BASE_URL}cart`
  axios.get(URL, getConfig())
  .then(res => dispatch(setCartGlobal(res.data.data.cart.products)))
  .catch(err => console.log(err))
}

export const addProductCart = (data) => (dispatch) => {
  const URL = `${BASE_URL}cart`
  axios.post(URL, data, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const deleteProductCart = (id) => (dispatch) => {
  const URl = `${BASE_URL}cart/${id}`
  axios.delete(URl, getConfig())
    .then(res => dispatch(getAllCartProduct()))
    .catch(err => console.log(err))
}

export const purchaseCart = (data) => (dispatch) => {
  const URL = `${BASE_URL}purchases`
  axios.post(URL, data, getConfig())
    .then(res => dispatch(setCartGlobal([])))
    .catch(err => console.log(err))
}