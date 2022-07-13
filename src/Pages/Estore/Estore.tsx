import React from 'react'
import "../../Styles/Estore/Estore.css"
import Product from '../../Components/Product/Product'
import Products from '../../Data/Estore/Product.json'
import Comment from '../../Components/Comment/Comment'
import Comments from '../../Data/Estore/Comment.json'

import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';


interface IProductState {
    id: number
    name: string
    image: string
    alt: string
    price: number
}
interface ICommentState{
    id: number
    image: string;
    name: string;
    job: string;
    comment: string
}

function Estore() {
  
  
  
  const productSearch = useSelector((state: RootState) => state.searchTerm.value)

  const products:any = Products.filter(product =>{

    if(productSearch === ""){
      return product
    }else if(product.name.toLowerCase().includes(productSearch.toLowerCase())){

     return product
  }
})

  return (
  <>
   <div className="product_section">
    {(products as IProductState[]).map(product =>{
      return (
        <Product 
        key={product.id}  
        {...product}
        
        />
        )
      })} 
    </div>
    <div className="comment_section">
      {(Comments as ICommentState[]).map(comment => {
        return (
          <Comment 
           key={comment.id}  
           {...comment}
          />
        )
      })}
    </div>
  </>
  )



  
}

export default Estore