import { useState } from 'react'
function ItemListContainer({div}){
    const [count, setCount] = useState(0)

    let contador = 0
    const handleCount = ()=>{
        setCount(count + 1)
    }


return(
    <div>
        {div()}
        <label>{ count }</label>
        <button onClick={ handleCount}>click</button>
    </div>
)
}
export default ItemListContainer