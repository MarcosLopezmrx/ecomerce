
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import CartWidget from './components/CartWidget';
import TituloApp from './components/Titulo/TituloApp'
import ComponenteContenedor from './components/ComponenteContedor/ComponenteContenedor'


function App() { // componente contendor

  return (
      <div >   
            <Navbar/>
  <h1>Navbar</h1>
  <CartWidget/>

          <TituloApp  titulo= {tit} subtitulo='soy subtitulo' saludo={saludo} />
          <ComponenteContenedor saludo='hola soy componente contenedor' />
      </div>
  )
  }

export default App
