import React from 'react'

 interface IProps {
    count:number
    icon: string
}


const Icon:React.FC<IProps>= (props) =>{
  return (
    <>
      <i className={props.icon}></i>
      <p>({props.count})</p>
    </>
  )
}

export default Icon
