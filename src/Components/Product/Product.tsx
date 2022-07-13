import React, {  useState, useLayoutEffect } from 'react'
import './Product.css'
import IMG from "../IMG/IMG"
import Icon from "../Icon/Icon"

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';
import { useDispatch } from 'react-redux'
import { addFavourite, deleteFavourite } from '../../Features/favouriteSlice'
import { addPurchase, addPurchaseQuantity } from '../../Features/purchaseSlice'


interface IProductProps {
    id: number
    name: string
    image: string
    alt: string
    price: number
}

interface IStyle {
     [key: string]: string
   }


const Product:React.FC<IProductProps>=(props) => {

  
   const [hover, setHover] = useState(false)
   const [liked, setLiked] = useState(false)
 
   const purchase = useSelector((state: RootState) => state.purchase.value)
   const favourite = useSelector((state: RootState) => state.favourite.value)
   const dispatch = useDispatch();


   

   const handleAddFavourite = (e:React.ChangeEvent<any>) =>{
    var  resultFavourite = favourite.find(f => f.id === props.id)

    e.stopPropagation(); 


     if(typeof resultFavourite === "undefined"){
       dispatch(addFavourite({
         "id": props.id,
         "image": props.image,
         "alt": props.alt,
         "name": props.name,
         "price": props.price
         
        }))
        setLiked(true)
        

      }else if( typeof resultFavourite === "object"){
        dispatch(deleteFavourite(props.id))
        setLiked(false)
      }
  }

   const handleAddPurchase = () =>{
    var resultPurchase = purchase.find(p => p.id === props.id)

     if(typeof resultPurchase === "undefined"){
       dispatch(addPurchase({
         "id": props.id,
         "image": props.image,
         "alt": props.alt,
         "name": props.name,
         "price": props.price,
         "quantity": 1,
 
       }))
      }else if( typeof resultPurchase === "object"){
        dispatch(addPurchaseQuantity(props.id))

      }
   }


   

    const hoverIMGStyle:IStyle = {
      "filter": "blur(2px)",
      "-webkit-filter": "blur(2px)",
      "-moz-filter":" blur(2px)",
    	
    }
    const normalIMGStyle:IStyle  = {
       
    }
    const hoverBoxStyle:IStyle = {
    	"display": "block",
      "position": "relative",
      "bottom": "51%",
    }
    const normalBoxStyle:IStyle  = {
      	"display": "none",

    }

    const hoverBtnStyle:IStyle = {
      "backgroundColor": "white",
      "border": "1px solid white",
      "color": "rgb(255, 157, 157)"
  
    }
    const normalBtnStyle:IStyle  = {
      "backgroundColor": "rgb(255, 206, 206)",
      "border": "1px solid rgb(255, 206, 206)",
      "color": "black"
    }

    const onMouseEnter = () => {
        setHover(true)
    }
  
    const onMouseLeave = () => {
        setHover(false)
    }
    

   // <div onClick={handleAddPurchase} className="product_box" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >

  return (
    
    <div className="product_box" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <div className="product_box_title">
         <h1>{props.name}</h1>
      </div>
      <div className="product_box_display">
         <IMG 
          style={hover ? hoverIMGStyle : normalIMGStyle} 
          image={props.image} 
          alt={props.alt} 
         />
         <div
          style={hover ? hoverBoxStyle : normalBoxStyle}
          className="product_box_display_hover"
         >
          <div >
            <div onClick={handleAddPurchase}>
              <Icon icon="fa-solid fa-cart-arrow-down" />
            </div>
            <div onClick={handleAddFavourite}>
              <Icon style={liked ? {"color":"black"} : {"color":"white"}} icon="fa-solid fa-heart" />
            </div>
            <Link to={`/products/${props.id}`}>
              <Icon icon="fa-solid fa-magnifying-glass" />
            </Link>
          </div>
         </div>
      </div>
      <div className="product_box_info">
         <h3>${props.price}</h3>
         <Link to="/purchase">
            <div
              onClick={handleAddPurchase}
              style={hover ? hoverBtnStyle : normalBtnStyle} 
              className="product_box_info_purchase"
            >
              <i className="fa-solid fa-cart-shopping"  />
              <p>Buy Now</p>
           </div>
        </Link>
      </div>
    </div>
  
  )
}

export default Product