import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'
import "./styles/CartProduct.css"

const CartProduct = ({cartProduct}) => {

  const dispatch = useDispatch()

  const handleDeleteProduct = () => {
    dispatch(deleteProductCart(cartProduct.id))
    alert("Product successfully removed")
  }

  return (
    <article className='cartProduct'>
      <h4 className='cartProduct__brand'>{cartProduct.brand}</h4>
      <h3 className='cartProduct__title'>{cartProduct.title}</h3>
      <div className='cartProduct__quantity'>
        <p>{cartProduct.productsInCart.quantity}</p>
      </div>
      <footer className='cartProduct__footer'>
        <h3 className='cartProduct__price'><span className='cartProduct__price-title'>Total:</span> ${(cartProduct.productsInCart.quantity * cartProduct.price).toFixed(2)}</h3>
      </footer>
      <i onClick={handleDeleteProduct} className='cartProduct__trast bx bx-trash' ></i>
    </article>
  )
}

export default CartProduct