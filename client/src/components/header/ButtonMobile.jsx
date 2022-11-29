import React, { useState } from 'react'
import { Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/loginDialog';
import { useContext } from 'react';
import { dataContext } from '../../context/dataProvider';
import Profile from './Profile';

const Buttons_mobile = () => {

  const [open , setOpen] = useState(false);

  const {account , setAccount} = useContext(dataContext)

  const openDialog = ()=>{
    setOpen(true);
  }


  return (
   
    <div id='btn-div1' >
      {
        account ?<Profile account= {account} setAccount = {setAccount}/> :
        <Button type='submit' id='login-btn1' className='nav-btns' variant='contained' onClick={()=> openDialog()}>Login</Button>
      }
    
      <p id='seller' className='nav-btns1'>Become a Seller</p>
      <p className='nav-btns'>More</p>

      <div id='cart'> 
      <ShoppingCartIcon />
      Cart
      </div>
      <LoginDialog open={open } setOpen={setOpen}/>
    </div>
    
    
    

  )
}

export default Buttons_mobile
