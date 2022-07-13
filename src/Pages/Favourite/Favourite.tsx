import React from 'react'
import "../../Styles/Favourite/Favourite.css"
import Favourites from "../../Components/Favourites/Favourites"

import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

function Favourite() {

  
   const favourite = useSelector((state: RootState) => state.favourite.value)
  return (
<>
      <h1>Favourite Products:</h1>
    <div className="favourite_cart_section">
        <div className="favourite_cart_title">
            <ul className="favourite_cart_title_product">
              <li>Product</li>
              <li>Price</li>
              <li>Add</li>
              <li>Remove</li>
            </ul>
              {favourite.map(favourite =>{
                return(
                  <Favourites
                  key={favourite.id} 
                  {...favourite} 
                  />
                  )
                })}
         </div>
  </div>
</>
  )
}

export default Favourite