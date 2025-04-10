import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
<>
<NavbarBootstrap/>
<ItemListContainer greeting='Catalogo de Vinos Punilla '/>
<ItemDetailContainer/>
</>
  )
}

export default App