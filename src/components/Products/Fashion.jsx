import React from 'react'
import { useFetch } from '../../custom Hooks/useFetch'
import "../Products/Fashion.css"
import { Link } from 'react-router-dom';

function Fashion() {
  let [items,loading,error]=useFetch("https://fakestoreapi.com/products");
  // console.log(items)
  return (
    <div className='mainContainer'>  
      {
       items.map(({id,image,price,title})=>{
            return <Link className='innerContainer' to={`/product-details/${id}`} key={id}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <h3>{price}</h3>
            </Link>
       })
      }
    </div>
  )
}

export default Fashion
