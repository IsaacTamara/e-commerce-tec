import React from 'react'
import { changeDataFormat } from '../../utils/date'
import { ProductPurchase } from './ProductPurchase'
import "./styles/PurchaseCard.css"

const PurchaseCard = ({purchese}) => {
  return (
    <article className='purchaseCard'>
      <h2 className='purchaseCard__data'>{changeDataFormat(purchese.createdAt)}</h2>
      <hr className='purchaseCard__line'/>
      <section className='purchaseCard__list'>
        {
          purchese.cart.products.map(productPurchase => <ProductPurchase key={productPurchase.id} productPurchase={productPurchase} />)
        }
      </section>
    </article>
  )
}

export default PurchaseCard