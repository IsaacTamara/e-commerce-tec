export const getConfig = () => {
  const {token} = JSON.parse(localStorage.getItem("userInfo"))
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return config
}