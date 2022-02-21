
import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
function App() {
  return(
<div className="App">

  <h1>Navbar</h1>

  <Router>
    <Navbar/>
  </Router>



</div>
  );
}
export default App;
