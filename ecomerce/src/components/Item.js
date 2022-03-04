import React from 'react'
import ItemCount from './ItemListContainer/ItemCount'

const Item = (product) => {
  return (
    <div>
        <div>
            <img src={product.img} alt="50px" />
            <h2>{product.name} </h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <ItemCount/>
        </div>
    </div>
  )
}

export default Item