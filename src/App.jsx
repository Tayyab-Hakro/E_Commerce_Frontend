
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>

<ToastContainer/>
    <Navbar/>
   <SearchBar/>
    <Routes>
      <Route path='/E_Commerce_Frontend/' element={<Home/>}/>
      <Route path='/E_Commerce_Frontend/collection' element={<Collection/>}/>
      <Route path='/E_Commerce_Frontend/contact' element={<Contact/>}/>
      <Route path='/E_Commerce_Frontend/about' element={<About/>}/>
      <Route path='/E_Commerce_Frontend/product/:productId' element={<Product/>}/>
      <Route path='/E_Commerce_Frontend/cart' element={<Cart/>}/>
      <Route path='/E_Commerce_Frontend/order' element={<Order/>}/>
      <Route path='/E_Commerce_Frontend/placeOrder' element={<PlaceOrder/>}/>
      <Route path='/E_Commerce_Frontend/login' element={<Login/>}/>      
    </Routes>
      <Footer/> 
 
      </>
  )
}

export default App
