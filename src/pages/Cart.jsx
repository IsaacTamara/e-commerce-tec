import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProduct, purchaseCart } from '../store/slices/cart.slice'
import "./styles/Cart.css"

const Cart = () => {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handlePuchaseCart = () => {
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    dispatch(purchaseCart(data))
    alert("Successful purchase")
  }

  useEffect(() => {
    dispatch(getAllCartProduct())
  }, [])

  return (
    <main className='cart'>
      <section className='cart__list'>
        {
          cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)
        }
        {
          !cart.length && (
            <h2>Not found products in cart</h2>
          )
        }
      </section>
      <div className='cart__div-container'>
        <button onClick={handlePuchaseCart} className='cart__div-btn'>Purchase</button>
      </div>
    </main>
  )
}

export default Cart