import React,{useLayoutEffect} from 'react'
import IMG from "../IMG/IMG"

import Icon from "../Icon/Icon"

import { useDispatch } from 'react-redux'
import { addPurchaseQuantity, deletePurchaseQuantity, deletePurchase } from '../../Features/purchaseSlice'


interface ICartProps{
   id: number;
   image: string;
   alt: string;
   name: string;
   price: number;
   quantity: number;
}


const Cart:React.FC<ICartProps> = (props) => {

  const dispatch = useDispatch(); 
  
  const handleAddPurchaseQuantity = () => {
    dispatch(addPurchaseQuantity(props.id));
  }
  const handleDeletePurchaseQuantity = () => {
    dispatch(deletePurchaseQuantity(props.id));
    
  }
  const handleDeletePurchase = () => {
    dispatch(deletePurchase(props.id));
  }


   useLayoutEffect(() => {
    if(props.quantity === 0){
       dispatch(deletePurchase(props.id));
    }
   }, [props.quantity])

  return (
    <div>
      <ul className="purchase_cart_title_product">
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
                <div onClick={handleAddPurchaseQuantity}>
                <Icon icon="fa-solid fa-plus" />
                </div>
                <p className="purchase_cart_title_product_box_para">{props.quantity}</p>
                <div onClick={handleDeletePurchaseQuantity}>
                <Icon icon="fa-solid fa-minus"  />
                </div>
              </li>
              <li>
                <p>{props.price * props.quantity}</p>
              </li>
              <li>
                <div onClick={handleDeletePurchase}>
                <Icon icon="fa-solid fa-trash"  />
                </div>
              </li>
      </ul>
    </div>
  )
}

export default Cart
