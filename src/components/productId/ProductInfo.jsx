import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductInfo.css"

const positionImages = ["first", "second", "third"]

const ProductInfo = ({product}) => {
  const [currenImage, setCurrenImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const handleMinus = () => {
    const newValue = quantity - 1
    if (newValue >= 1) {
      setQuantity(newValue)
    }
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleAddProduct = () => {
    const data = {
      id: product.id,
      quantity: quantity
    }
    dispatch(addProductCart(data))
    alert("you have added a product to the cart")
  }

  const handleClickLeft = () => {
    const newValue = currenImage - 1
    if (newValue >= 0) {
      setCurrenImage(newValue)
    }else {
      setCurrenImage(positionImages.length - 1)
    }
  }

  const handleClickRight = () => {
    const newValue = currenImage + 1
    if (newValue <= 2) {
      setCurrenImage(newValue)
    }else {
      setCurrenImage(0)
    }    
  }

  return (
    <article className="productInfo">
      <div className='productInfo__slider'>
        <div className={`productInfo__slider-container ${positionImages[currenImage]}`}>
          <img src={product?.productImgs[0]} alt="product" />
          <img src={product?.productImgs[1]} alt="product" />
          <img src={product?.productImgs[2]} alt="product" />
        </div>
        <div onClick={handleClickLeft} className='productInfo__slider-arrowLeft-div' >
          <i className='productInfo__slider-arrowLeft bx bxs-chevrons-left'></i>
        </div>
        <div onClick={handleClickRight} className='productInfo__slider-arrowRight-div' >
          <i className='productInfo__slider-arrowRight bx bxs-chevrons-right'></i>
        </div>
      </div>
      <div className='productInfo__info'>
        <h2 className="productInfo__title">{product?.title}</h2>
        <p className="productInfo__description">{product?.description}</p>
        <footer className="productInfo__footer">
          <div className="productInfo__container-price">
            <h3 className="productInfo__price-title">Price</h3>
            <span className="productInfo__price">$ {(product?.price * quantity).toFixed(2)}</span>
          </div>
          <div className="productInfo__container-quantity">
            <h3 className="productInfo__quantity-title">Quantity</h3>
            <div className="productInfo__container-counter">
              <div className="productInfo__minus" onClick={handleMinus}>
                -
              </div>
              <div className="productInfo__counter">{quantity}</div>
              <div className="productInfo__plus" onClick={handlePlus}>
                +
              </div>
            </div>
          </div>
          <button onClick={handleAddProduct} className="productInfo__btn">
            Add to cart  <i className="bx bx-cart"></i>
          </button>
        </footer>
      </div>
    </article>
  );
}

export default ProductInfo