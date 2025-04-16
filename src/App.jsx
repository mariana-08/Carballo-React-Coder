import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <NavbarBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Catalogo de Vinos Punilla '/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bodega'/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/> }/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App