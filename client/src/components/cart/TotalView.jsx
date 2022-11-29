import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TotalView = ({cartItems}) => {

  const [price , setPrice] = useState(0)
  const [discount , setDiscount] = useState(0)
// eslint-disable-next-line
  useEffect(() => {
    totalAmount()
  },[cartItems])

  const totalAmount = () => {
     let price = 0 , discount = 0 ;
    cartItems.map(item => {
      price += item.price.mrp
      discount += (item.price.mrp - item.price.cost)
    })

    setPrice(price)
    setDiscount(discount)
  }

  return (
    <Box >
      <Box id='cart-item-right-price-heading-div'>
        <Typography id='cart-item-right-price-heading'>PRICE DETAILS</Typography>
      </Box>
      <Box id='cart-item-right-container'>
        <Typography>Price({cartItems?.length} items)
        <Box className='cart-item-right-price' component='span'>₹{price}</Box>
         </Typography>
         <Typography >Discount
        <Box className='cart-item-right-price' component='span' style={{color:'green'}}>-₹{discount}</Box>
         </Typography>
         <Typography  >Delivery Charges
        <Box className='cart-item-right-price' component='span' style={{color:'green'}}>₹40</Box>
         </Typography>
         <Typography style={{fontSize:'20px'}}>Total Amount  
        <Box className='cart-item-right-price'component='span'>₹{price - discount +40}</Box>
         </Typography>
         <Typography style={{color:'green'}}>You will save ₹{discount-40} on this order</Typography>
      </Box>
    </Box>
  )
}

export default TotalView
