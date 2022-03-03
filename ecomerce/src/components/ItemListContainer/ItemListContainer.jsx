import React from 'react'
import ItemCount from './ItemCount'


function ItemListContainer( { cartelera } ) {
  return (
    <div>
        <h3>{cartelera}</h3>
        <ItemCount/>
    </div>
    
  )
}

export default ItemListContainer


