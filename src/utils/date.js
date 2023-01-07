export const changeDataFormat = (oldFormat) => {
  const newDate = new Date(oldFormat)
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }
  return newDate.toLocaleDateString("en-En", options)
}