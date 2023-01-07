import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/purchases/PurchaseCard'
import { getConfig } from '../utils/configAxios'
import "./styles/Purchases.css"

const Purchases = () => {
  const [purchases, setpurchases] = useState([])
  
  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases"
    axios.get(URL, getConfig())
      .then(res => {
        const newPurchase = res.data.data.purchases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setpurchases(newPurchase)
      })
      .catch(err => console.log(err))
  }, [])
  

  return (
    <main className='purchases'>
      <h2 className='purchases__title'>My purchases</h2>
      <section className='purchases__list'>
        {
          purchases.map(purchese => <PurchaseCard key={purchese.id} purchese={purchese} />)
        }
      </section>
    </main>
  )
}

export default Purchases