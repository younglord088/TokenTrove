import React from 'react'
import "./styles.css"
import Button from "../Button";
import TemporaryDrawer from "../../Common/Header/drawer";
import "./styles.css";
import { Link } from 'react-router-dom';


function Header(){
  return <div className='navbar'>
    <h1 className='logo'>TokenTrove<span style={{color:"var(--blue)"}}>.</span></h1>
    <div className='links'>
      <Link to='/'><p className='link '>Home</p></Link >
      <Link to='/compare'><p className='link '>Compare</p></Link >
      <Link to='/watchlist'><p className='link '>Watchlist</p></Link >
      <Link to='/dashboard'>
      <Button
       text={"Dashboard"} 
       
       onClick={()=>{console.log('Dashboard Clicked')}}
      /> </Link>
      
    </div>
    <div className='mobile-drawer'>
    <TemporaryDrawer/>
    </div>
  </div>
  
}

export default Header