import { useState } from 'react'
import logo from './logo.svg';
import './App.css'
import navBar from './components/navbar';

function App() {

  const [count, setCount] = useState(0)
  const style = {backgroundColor: 'blue'}

  return(
    <div 
    className='App'
    style={style}
    >
      <navBar />
      <input />
      hola soy una app
    </div>
  )
}

export default App;
