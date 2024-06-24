
import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);
   
    

<<<<<<< HEAD
    return (
      <div>
        <IconButton onClick={() => setOpen(true)} className="drawer-button">
          <MenuRoundedIcon className="link" />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <div className="drawer-div">
            <a href="/">
              <p className="link">Home</p>
            </a>
            <a href="/compare">
              <p className="link">Compare</p>
            </a>
            <a href="/watchlist">
              <p className="link">Watchlist</p>
            </a>
            <a href="/dashboard">
              <p className="link">Dashboard</p>
            </a>
            
          </div>
        </Drawer>
      </div>
    );
  }
=======
  return (
    <div>
     
        <IconButton onClick={()=>setOpen(true)}> 
        <MenuRoundedIcon className='link' /> 
            
        </IconButton>
        <Drawer
            anchor={"right"}
            open={open}
            onClose={()=> setOpen(false)}
        >
        <div className='links'>
        <a href='#'><p className='link '>Home</p></a>
        <a href='#'><p className='link '>Compare</p></a>
        <a href='#'><p className='link '>Watchlist</p></a>
        <a href='#'><p className='link '>Dashboard</p></a>
        </div>
        </Drawer>
       
    </div>
  );
}
>>>>>>> 6b7cbd8a9d9f1151412d33d05868b8b2fe3fd82d
