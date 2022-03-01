
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import CartWidget from './components/CartWidget';
import Div from './components/Div';
import ItemlistContainer2 from './components/ItemListContainer/ItemlistContainer2';
function App() { // componente contendor

  return (
      <div >   
          <Navbar/>
          <ItemlistContainer2 div = {Div} />
          
          <ItemListContainer cartelera={'Cartelera de productos'} />
      </div>
  )
  }
export default App
