
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import CartWidget from './components/CartWidget';
import Div from './components/Div';
import ItemList from './components/ItemList';
function App() { // componente contendor

  return (
      <div >   
          <Navbar/>          
          <ItemListContainer cartelera={'Cartelera de productos'} />
          <ItemList/>
      </div>
  )
  }
export default App
