import React from 'react'
import "./styles.css"
function Button({text, onClick, outlined}) {
  return (
    <div className={outlined?"outlined-button":'btn'} onClick={()=>onClick()}>
            {text}
        </div> 
  )
}

export default Button