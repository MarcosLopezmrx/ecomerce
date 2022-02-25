
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
function App() {
  return(
<div className="App">
    <Navbar/>
    <ItemListContainer/>
  <h1>Navbar</h1>

</div>
  );
}
export default App;
