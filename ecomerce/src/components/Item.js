import React from 'react'

const Item = (props) => {
  return (
    <div>
        <div>
            <img src={props.img} alt="50px" />
            <h2>{props.name} </h2>
        </div>
    </div>
  )
}

export default Item