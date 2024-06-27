import React from 'react'
import "./styles.css"
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { Button, styled } from '@mui/material' 
import {motion} from 'framer-motion'

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--blue)',
  border: 'none',
  color: 'var(--white)',
  padding: '0.5rem 1.5rem',
  textAlign: 'center',
  fontWeight: '600',
  cursor: 'pointer',
  borderRadius: '15px',
  minWidth: '150px',
  border: '2px solid var(--blue)',
  '&:hover': {
    boxShadow: '5px 5px 10px rgba(58, 128, 233, 0.5)',
    transition: '0.3s',
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--black)',
  border: 'none',
  color: 'var(--white)',
  padding: '0.5rem 1.5rem',
  textAlign: 'center',
  fontWeight: '600',
  cursor: 'pointer',
  borderRadius: '15px',
  minWidth: '150px',
  border: '2px solid var(--blue)',
  '&:hover': {
    boxShadow: '5px 5px 10px rgba(58, 128, 233, 0.5)',
    backgroundColor: 'var(--blue)',
    transition: '0.3s',
  },
}));

function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <h1 className='track-crypto-heading'>Track Crypto</h1>
        <div className='heading-line'>
          <h1 className='track-crypto-heading'>Prices</h1>
          <h1 className='real-time-heading'>in</h1>
        </div>
        <h1 className='real-time-heading'>Real Time.</h1>
        <p className='track-crypto-para'>Get the latest prices of cryptocurrencies and track your favourite coins.</p>
        <div className='button-flex'>
          <StyledButton>Dashboard</StyledButton>
          <OutlinedButton variant="outlined">Share</OutlinedButton>
        </div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone} className='iphone-img' alt="iPhone"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      />
        <img src={gradient} className='gradient-img' alt="Gradient"/>
      </div>
    </div>
  )
}

export default MainComponent

