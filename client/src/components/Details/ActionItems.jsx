import React from 'react'
import { Button, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const ActionItems = ({ product }) => {

  const navigate = useNavigate();
  const { id } = product;

  const [quantity , setQuantity] = useState(1);
  const dispatch = useDispatch();

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'aveshsingh601@gmail.com' });
    var information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }


  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart')
  }

 

  return (
    <div id='items-parent-div'>
      <Box style={{
        padding: '15px 20px',
        border: '1px solid #f0f0f0', width: '90%'
      }}>
        <img id='items-img' src={product.detailUrl} alt='productimg' />
      </Box>

      <Button id='items-add-cart-btn' onClick={addItemToCart} variant='contained'><ShoppingCartIcon />&nbsp;ADD TO CART</Button>
      <Button id='items-buy-btn' variant='contained' onClick={() => buyNow()}><FlashOnIcon />&nbsp;BUY NOW</Button>
    </div>
  )
}

export default ActionItems
