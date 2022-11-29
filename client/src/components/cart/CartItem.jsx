
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';

import {removeFromCart} from '../../redux/actions/cartActions'

import {useDispatch} from 'react-redux'

import { addEllipses } from '../../utils/common-utils';
import GroupedButton from './GroupedButton';

const CartItem = ({item}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

  return (
    <Box id='cart-item-main'>
        <Box id='cart-item-left-container'>
            <img src={item.url} alt='product' style={{height:'110px' , width:'110px '}}/>
            <GroupedButton/>
        </Box>
        <Box style={{margin:'20px'}}>
            <Typography>{addEllipses(item.title.longTitle)}</Typography>
            <Typography id='smalltext' >Seller: All Rounder Official
                
                <Box component='span'>
                    <img src={fassured} alt='fassured' style={{width: '50px' , marginLeft: '10px'}}/>
                </Box>
                
                 </Typography>
                 <Typography style={{margin:'20px 0px'}}>
                 <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box> &nbsp; 
                <Box component='span' style={{ fontWeight:'600' , fontSize:'18px' }}>₹{item.price.cost}</Box> &nbsp;
                
                <Box component='span' style={{ color: 'rgb(80,140,70)' }}>{item.price.discount} off </Box> 
                <Box component='span' style={{color: 'rgb(80,140,70)' , fontWeight:'600' , fontSize:'14px'}}> 2 offers applied <InfoIcon style={{  background: 'white', marginBottom: '-4px', fontWeight:'600', fontSize:'18px' }} /></Box> 
            </Typography> 
            <Button id='cart-item-remove-btn' onClick={()=>removeItemFromCart(item.id)}>REMOVE</Button>
        </Box>
    </Box>
  )
}

export default CartItem
