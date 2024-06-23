import React from 'react'
import "./styles.css"
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <h1 className='track-crypto-heading'>Track Crypto in</h1>
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