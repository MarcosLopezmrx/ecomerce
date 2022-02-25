
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import CartWidget from './components/CartWidget';
function App() {
  return(
<div className="App">
    <Navbar/>
  <h1>Navbar</h1>
  <CartWidget/>

</div>
  );
}
export default App;
