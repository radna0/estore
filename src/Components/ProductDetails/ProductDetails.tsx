import React from 'react'
import "./ProductDetails.css"
import  { useParams } from "react-router-dom"
import IMG from "../IMG/IMG"
import products from '../../Data/Estore/Product.json';

function ProductDetails() {

  

  const { id } = useParams()


  const indexOfAction:number = products.findIndex(product => {
    return product.id.toString() === id
        });


  const product = products[indexOfAction]

  console.log(product)

        

  return (
    <>
    <div className="product_details_container">
      <div className="product_details_display">
        <IMG style={{"width": "500px"}} image={product.image} alt={product.alt}/>
      </div>
    <div className="product_details_title">
      <h1>Name: {product.name}</h1>
      <h3>Price: ${product.price}</h3>
    </div>
    </div>
    </>
  )
}

export default ProductDetails