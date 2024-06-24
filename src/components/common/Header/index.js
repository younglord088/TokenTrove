import React from 'react'
import "./styles.css"
import Button from "../Button";
import TemporaryDrawer from "../../Common/Header/drawer";
import "./styles.css";


function Header(){
  return <div className='navbar'>
    <h1 className='logo'>TokenTrove<span style={{color:"var(--blue)"}}>.</span></h1>
    <div className='links'>
      <a href='#'><p className='link '>Home</p></a>
      <a href='#'><p className='link '>Compare</p></a>
      <a href='#'><p className='link '>Watchlist</p></a>
      <a href='#'>
      <Button
       text={"Dashboard"} 
       
       onClick={()=>{console.log('Dashboard Clicked')}}
      /> </a> 
      
    </div>
    <div className='mobile-drawer'>
    <TemporaryDrawer/>
    </div>
  </div>
  
}

export default Header