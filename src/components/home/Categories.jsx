import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style/Categories.css"


const Categories = ({setCategory}) => {  
  const [categories, setCategories] = useState([])
  const [clickCategories, setClickCategories] = useState(true)

  const handleClickCategory = (id) => {
    setCategory(id)
  }

  const handleClick = () => {
    setClickCategories(!clickCategories)
  }

  useEffect(()=> {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])
  return (
    <section className='categories'>
      <div onClick={handleClick} className='categories__title'>
        <span>Category</span>
        <i  className={ clickCategories ? 'arrow1 bx bxs-down-arrow' : 'arrow2 bx bxs-down-arrow'}></i>
      </div>
      <ul className={clickCategories ? 'categories__list' : 'categories__list-none'}>
        <li onClick={() => handleClickCategory("")}>All products</li>
        {
          categories.map(category => <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>)
        }
      </ul>
    </section>
  )
}

export default Categories