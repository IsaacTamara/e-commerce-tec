import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'
import "./style/ProductCard.css"

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickProduct = () => {
    navigate(`/products/${product.id}`)
  }

  const handleClickAddCart = e => {
    e.stopPropagation()
    const data = {
      id: product.id,
      quantity: 1
    }
    dispatch(addProductCart(data))
    alert("you have added a product to the cart")
  }

  return (
    <article className='productCard' onClick={handleClickProduct}>
      <header className='productCard__header'>
        <img className='productCard__header-img1' src={product.productImgs[0]} alt="product" />
        <img className='productCard__header-img2' src={product.productImgs[1]} alt="products" />
      </header>
      <hr />
      <div className='productCard__boby'>
        <h3 className='productCard__title'>{product.title}</h3>
        <h4 className='productCard__title-price'>Price</h4>
        <span className='productCard__price'>$ {product.price}</span>
        <button className='productCard__btn' onClick={handleClickAddCart}>
          <i className='bx bx-cart'></i>
        </button>
      </div>
    </article>
  )
}

export default ProductCard