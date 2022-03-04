import React, {useState, useEffect} from 'react'
import productsApi from '../promise';
import Item from './Item';

function ItemList () {
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi
        .then((response) =>{
            setProducts(response)
        })
        .catch((error) => {console.log(error)})
    },)
  return (
    <div className='row'>
        {
            products.map((product) => <Item key={product.id} img={product.img} name={product.name} description={product.description} price={product.price} />)
        }
    </div>
  );
};

export default ItemList