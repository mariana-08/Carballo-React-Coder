import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';
import HookForm from './components/HookForm';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';


function App() {  
  return (
    <BrowserRouter>     
      <CartProvider>
        <div className='d-flex flex-column min-vh-100'>
          <NavbarBootstrap/>
          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Catalogo de Vinos Punilla '/>} />            
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bodega'/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/> }/>
              <Route path='*' element={<Error404/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='checkout' element={<HookForm/>} />      
              <Route path='/nosotros' element={<Nosotros/>} />   
            </Routes>
          </main>
          <Footer/>
        </div>
      </CartProvider>     
    </BrowserRouter>
  )
}

export default App