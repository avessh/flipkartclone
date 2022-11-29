import React, { useState } from 'react'
import { Badge, Button, Link, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/loginDialog';
import { useContext } from 'react';
import { dataContext } from '../../context/dataProvider';
import Profile from './Profile';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Buttons = () => {

  const [open , setOpen] = useState(false);

  const {account , setAccount} = useContext(dataContext)

  const {cartItems} = useSelector(state => state.cart)

  const openDialog = ()=>{
    setOpen(true);
  }
  const navigate = useNavigate();

  const cart = () =>{
    navigate('/cart')
  }


  return (
   
    <div id='btn-div' >
      {
        account ?<Profile account= {account} setAccount = {setAccount}/> :
        <Button type='submit' id='login-btn' className='nav-btns' variant='contained' onClick={()=> openDialog()}>Login</Button>
      }
    
      <p id='seller' className='nav-btns'>Become a Seller</p>
      <p className='nav-btns'>More</p>
      
      <Link onClick={cart} id='cart' style={{color:'white' , textDecoration:'none' , cursor:'pointer'}}>
        <Badge badgeContent={cartItems?.length} color='secondary'>
      <ShoppingCartIcon />
      </Badge> 
     <Typography style={{marginLeft:'10px'}}> Cart</Typography>
      </Link>
      <LoginDialog open={open } setOpen={setOpen}/>
    </div>
    
    
    

  )
}

export default Buttons
