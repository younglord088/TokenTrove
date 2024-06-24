import React from 'react'
import "./styles.css"
function Button({text, onClick, outlined}) {
  return (
    <div className={outlined?"outlined-button":'btn'} onClick={()=>onClick()}>
            {text}
<<<<<<< HEAD
        </div> 
=======
        </div>
>>>>>>> 6b7cbd8a9d9f1151412d33d05868b8b2fe3fd82d
  )
}

export default Button