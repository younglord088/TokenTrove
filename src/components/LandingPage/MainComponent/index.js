import React from 'react'
import "./styles.css"
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { Button } from '@mui/material'

function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <h1 className='track-crypto-heading'>Track Crypto </h1>
        <div className='heading-line'>
      <h1 className='track-crypto-heading'>Prices </h1>
      <h1 className='real-time-heading'>    In</h1>
    </div>
        <h1 className='real-time-heading'>Real Time.</h1>
        <p className='track-crypto-para'>Get the latest prices of cryptocurrencies and track your favourite coins.</p>
        <div className='button-flex'>
          <Button text={"Dashboard"}  />
          <Button text={"Share"} outlined={true} />
          </div>
      </div> 
      <div className='phone-container'>
        <img src={iphone} className='iphone-img'/>
        <img src={gradient} className='gradient-img'/>
         </div>
      </div>

  )
}

export default MainComponent