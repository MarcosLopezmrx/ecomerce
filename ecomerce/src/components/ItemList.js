import React, {useState} from 'react'
import Item from './Item';

const ItemList = () => {
    const [Items, setItems] = useState([
        {
            id:1,
            name:"producto1",
            img:"#",
        },
        {
            id:2,
            name:"producto2",
            img:"#",
        },
        {
            id:3,
            name:"producto3",
            img:"#",
        }
    ])
  return (
    <div className='row'>
        {Items.map((Items) =>{
        return <Item name={Item.name} img={Item.img} />;  
        
        })}
    </div>
  );
};

export default ItemList