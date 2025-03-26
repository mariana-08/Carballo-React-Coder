import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
<>
<NavbarBootstrap/>
<ItemListContainer greeting='Bienvenidos a mi  1er  App '/>
</>
  )
}

export default App