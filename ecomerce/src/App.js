
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import CartWidget from './components/CartWidget';

function App() { // componente contendor

  return (
      <div >   
          <Navbar/>
          
          
          <ItemListContainer saludo={'Cartelera de productos'} />
      </div>
  )
  }
export default App
