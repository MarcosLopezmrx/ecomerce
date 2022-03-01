import { useState } from 'react'

    let stock = 20
    let maximo = 20
    let minimo = 1
function ItemlistContainer2(){
 
    const [count, setCount] = useState(1)
    
        const sumar =()=>{
        if(count < stock){
            setCount(count+1)
        }
    }

    
    const restar =()=>{
        if(count > 1){
    setCount(count-1)
}
    }
    const comprar =()=>{
        if(count < stock){
            console.log(`Has agregado ${count} al carrito`)
        }else{
            console.log("no hay stock suficiente")
        }
        }
return(
    <div>
        <label>{ count }</label>
        <button className='pepe' onClick={ sumar }> agregar</button>
        <button onClick={ restar }> quitar</button>
        <button onClick={ comprar }> agregar al carrito</button>
    </div>
)
}

export default ItemlistContainer2