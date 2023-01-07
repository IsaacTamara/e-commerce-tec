import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const defaultValue = ({
  token: "",
  user: {}
})

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: JSON.parse(localStorage.getItem("userInfo")) ?? defaultValue,
  reducers: {
    setUserInfoGlobal: (state, action) => action.payload
  }
})

export const {setUserInfoGlobal} = userInfoSlice.actions

export default userInfoSlice.reducer

export const loginUserThunk = (data) => (dispacth) => {
  const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login"
  axios.post(URL, data)
    .then(res => {
      dispacth(setUserInfoGlobal(res.data.data))
      localStorage.setItem("userInfo", JSON.stringify(res.data.data))
    })
    .catch(err => console.log(err))
}

export const logOutThunk = () => (dispacth) => {
  localStorage.removeItem("userInfo")
  dispacth(setUserInfoGlobal(defaultValue))
}