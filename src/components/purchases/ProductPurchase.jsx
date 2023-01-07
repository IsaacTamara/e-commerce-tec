import React from 'react'
import "./styles/ProductPurchase.css"

export const ProductPurchase = ({productPurchase}) => {
  return (
    <article className='productPurchase'>
      <h4 className='productPurchase__title'>{productPurchase.title}</h4>
      <h4 className='productPurchase__quantity'>{productPurchase.productsInCart.quantity}</h4>
      <h4 className='productPurchase__price'>$ {(productPurchase.productsInCart.quantity * productPurchase.price).toFixed(2)}</h4>
    </article>
  )
}
