import React from 'react'

interface IIMGProps {
    style?: Object;
    image: string;
    alt?: string;
}


function IMG(props:IIMGProps) {
  return (
    <img style={props.style} src={props.image} alt={props.alt} />
  )
}

export default IMG