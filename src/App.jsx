
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
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      <Route path='/login' element={<Login/>}/>      
    </Routes>
      <Footer/> 
 
      </>
  )
}

export default App
