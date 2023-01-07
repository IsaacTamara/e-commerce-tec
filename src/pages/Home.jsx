import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import "./styles/Home.css"

const Home = () => {
  const [nameProduct, setNameProduct] = useState("")
  const [category, setCategory] = useState("")
  const [firterProducts, setFirterProducts] = useState([])
  const products = useSelector(state => state.products)
  const [clickFilter, setClickFilter] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }

  const handleClickFilter = () => {
    setClickFilter(!clickFilter)
  }  

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    setFirterProducts(products)
  }, [products])

  useEffect(() => {
    const newProducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id === category || category === ""))
    setFirterProducts(newProducts)
  }, [nameProduct, category])
  
  
  return (
    <main className={'home'}>
      <aside className={ clickFilter ? 'home__aside home__section-btnfilter-true' : 'home__aside home__section-btnfilter-false'}>
        <Categories setCategory={setCategory}  />
      </aside>      

      <section className='home__section'>
        <form className="home__form" onSubmit={handleSubmit}>
          <div className="home__form-div">
            <input
              className="home__form-input"
              type="text"
              id="nameProduct"
              placeholder="What are you lookin for?"
            />
            <button className="home__form-btn">
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>          
        </form>    
        
        <button onClick={handleClickFilter} className='home__section-btnfilter'><i className='bx bx-filter-alt'></i> Filters</button>  

        <section className='home__containerProducts'>
          {firterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home