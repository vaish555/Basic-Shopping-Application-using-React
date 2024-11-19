import React from 'react'
import { useFetch } from '../../custom Hooks/useFetch';
import "../Products/ProductDetails.css"
import { useParams } from 'react-router-dom';

function ProductDetails() {
   let {pid}=useParams();
     pid=Number(pid);
    let [product,loading,error]=useFetch(`https://fakestoreapi.com/products/${pid}`)
  return (
    <div className='itemContainer'>
        <div className='imageContainer'>
            <img src={product.image} alt="" />
        </div>
        <div className='descriptionContainer'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>Rating: {product.rating?.rate}</h2>
            <h2>Quantity: {product.rating?.count}</h2>
        </div>
    </div>
  )
}

export default ProductDetails
