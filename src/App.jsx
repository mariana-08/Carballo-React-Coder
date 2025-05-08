import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {  
  return (
    <BrowserRouter>     
      <CartProvider>
        <NavbarBootstrap/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Catalogo de Vinos Punilla '/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bodega'/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/> }/>
            <Route path='*' element={<Error404/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='checkout' element={<Checkout/>} /> 
          </Routes> 
      </CartProvider>     
    </BrowserRouter>
  )
}

export default App