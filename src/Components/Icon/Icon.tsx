import React from 'react'
import "./Icon.css"
interface IIconProps{
    style?: object
    icon: string;
}

const Icon:React.FC<IIconProps>=(props)=> {
  return (

    <i style={props.style} className={`${props.icon} purchase_cart_title_product_box_icon`} ></i>
  )
}

export default Icon
