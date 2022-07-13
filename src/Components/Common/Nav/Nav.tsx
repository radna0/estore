import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"
import {  SearchBar , Icon } from "./index"
import Banner from "./Data/Banner.json"
import icons from "./Data/Icons.json"
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/store';
import IMG from "../../IMG/IMG"


interface IState {
    id: number
    icon: string
    to: string
}

function Nav() {




  const favourite = useSelector((state: RootState) => state.favourite.value)
  const purchase = useSelector((state: RootState) => state.purchase.value)
  
  const count = [favourite.length, purchase.length]

  return (
    <>
    <div className='NavBar_section'>
      <Link to="/estore" className="NavBar_display">
        <IMG image={Banner.image} alt={Banner.alt} />
      </Link>
      <SearchBar />
      <div>
        {(icons as IState[]).map( icon =>{
          return (
            <Link key={icon.id} to={icon.to} className="NavBar_icon_link">
              <Icon  count={count[icon.id-1]} icon={icon.icon}  /> 
            </Link>
          )
        }
        )}
        </div>
    </div>
    </>
  )
}

export default Nav