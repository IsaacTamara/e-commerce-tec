import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'
import Cart from './pages/Cart'
import ProtectedRoutes from './components/app/ProtectedRoutes'
import Header from './layout/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductId />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
