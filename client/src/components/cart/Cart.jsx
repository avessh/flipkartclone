import { useSelector } from 'react-redux'
import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';



import CartItem from './CartItem';
import TotalView from './TotalView';

//css
import '../../style/Cart.css'
import EmptyCart from './EmptyCart';

const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'aveshsingh601@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
     

    return (
        <>
           {
            cartItems.length ?
            <Grid container id='cart-items-parent-div'>
                <Grid id='cart-items-left-component' item lg={9} md={9} sm={12} xs={12}>
                    <Box id='cart-items-container'>
                        <Typography> My cart({cartItems.length})</Typography>
                    </Box>
                    {
                        cartItems.map(item => (
                            <CartItem item={item}/>
                        ))
                    }
                    <Box id='place-order-btn-container'>
                        <Button onClick={() => buyNow()} id='place-order-btn'>PLACE ORDER</Button>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems}/>
                </Grid>

            </Grid>
            :
                <EmptyCart/>
           }


        </>
    )
}

export default Cart
