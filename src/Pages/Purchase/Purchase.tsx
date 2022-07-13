import React from 'react'
import "../../Styles/Purchase/Purchase.css"
import Cart from "../../Components/Cart/Cart"
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';
function Purchase() {


   const purchases = useSelector((state: RootState) => state.purchase.value)

   const totalPrice = purchases.reduce((acc, purchase) =>{
      return acc +(purchase.price * purchase.quantity) 
    },0)

   
  return (
    <div>
      <h1>Cart:</h1>
      <div className="purchase_cart_section">
        <div className="purchase_cart_title">
            <ul className="purchase_cart_title_product">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
              <li>Remove</li>
            </ul>
            {purchases.map(purchase =>{
              return (
                <Cart key={purchase.id}  {...purchase} />
              )
            })}
        </div>

        <div className="purchase_cart_summary">
          <h1>Cart Summary</h1>
          <h1>
            Grand Total: ${totalPrice}
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Purchase