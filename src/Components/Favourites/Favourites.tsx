import React,{useLayoutEffect} from 'react'

import IMG from "../IMG/IMG"
import Icon from "../Icon/Icon"

import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';
import { useDispatch } from 'react-redux'
import { addPurchase,addPurchaseQuantity } from '../../Features/purchaseSlice'
import { deleteFavourite } from '../../Features/favouriteSlice'
interface IFavState {
    id: number
    name: string
    image: string
    alt: string
    price: number
}


const Favourites:React.FC<IFavState>=(props) => {

  const dispatch = useDispatch(); 

  
   const purchase = useSelector((state: RootState) => state.purchase.value)
  

  const handleDeleteFavourite = () => {
    dispatch(deleteFavourite(props.id));
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

  return (
    <div>
      <ul className="favourite_cart_title_product">
              <li>
                <IMG 
                image={props.image} 
                alt={props.alt} 
                />
                <p>{props.name}</p>

              </li>
              <li>
                <p>${props.price}</p>
              </li>
              <li>
                <div onClick={handleAddPurchase}>
                <Icon icon="fa-solid fa-cart-arrow-down"  />
                </div>
              </li>
              <li>
                <div onClick={handleDeleteFavourite}>
                <Icon icon="fa-solid fa-trash"  />
                </div>
              </li>
      </ul>
    </div>
  )
}

export default Favourites