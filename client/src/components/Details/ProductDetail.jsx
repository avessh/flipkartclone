import React from 'react'
import { Box, Typography, TableBody, TableRow, Table, TableCell } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';

const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    return (
        <>

            <p style={{ fontSize: '20px', fontWeight: '600' }}>{product.title.longTitle}</p>
            <p style={{ marginTop: '5px', color: '#878787', fontSize: '14px' }}>
                8 Rating & 1 Review
                <Box component='span'>
                    <img style={{ width: '77px', marginLeft: '20px', marginBottom: '-5px' }} src={fassured} alt='assured' />
                </Box>
            </p>
            <Typography>
                <Box component='span' style={{ fontSize: '28px' }}>₹{product.price.cost}</Box> &nbsp; &nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box> &nbsp; &nbsp;
                <Box component='span' style={{ color: 'rgb(80,140,70)' }}>{product.price.discount} off</Box> <InfoIcon style={{ color: 'black', background: 'white', marginBottom: '-5px' }} />
            </Typography>
            <Typography>Available offers</Typography>
            <Box id='product-detail-offers'>
                <Typography> <LocalOfferIcon className='product-detail-offer-badge' /> Special PriceGet extra 7% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography> <LocalOfferIcon className='product-detail-offer-badge' /> Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all products T&C</Typography>
                <Typography> <LocalOfferIcon className='product-detail-offer-badge' /> Partner OfferBuy this product and get upto ₹250 off on Flipkart Furniture Know More</Typography>
                <Typography> <LocalOfferIcon className='product-detail-offer-badge' /> Partner OfferPurchase now & get a surprise cashback coupon for October/November/December 2022 on Flipkart</Typography>
                <Typography> <LocalOfferIcon className='product-detail-offer-badge' /> Bank Offer10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and aboveT&C</Typography>
                <Typography><LocalOfferIcon className='product-detail-offer-badge' /> Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and aboveT&C</Typography>
            </Box>
            <Table>
                <TableBody>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' style={{ color: '#878787' ,verticalAlign:'baseline'}}>Delivery</TableCell>
                        <TableCell className='product-detail-table-cell' style={{ fontWeight: '600' }}>Delivery by  {new Date().getFullYear()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' style={{ color: '#878787', verticalAlign:'baseline' }}>Warranty</TableCell>
                        <TableCell className='product-detail-table-cell' style={{ fontWeight: '600' }}>2 Years no question ask warranty</TableCell>
                    </TableRow>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' style={{ color: '#878787' ,verticalAlign:'baseline' }}>Seller</TableCell>
                        <TableCell >
                            <Typography style={{ fontWeight: '600', color: '#2874f0', fontSize:'14px' }}>All Rounder Official</Typography>
                            <Typography style={{fontSize:'14px'}}>7 Days replacement policy</Typography>
                            <Typography style={{fontSize:'14px'}}>view more seller starting from ₹{product.price.cost} </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' style={{ color: '#878787', verticalAlign:'baseline' }}>Services</TableCell>
                        <TableCell >
                            <Typography style={{fontSize:'14px'}}>
                                1 year brand Warranty</Typography>
                            <Typography style={{fontSize:'14px'}}>7 Days Replacement Policy </Typography>
                            <Typography style={{fontSize:'14px'}}>Cash on Delivery available</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' colSpan='2'>
                            <img src={adURL} style={{ width: '390px' }} alt='flipkartcoins' />
                        </TableCell>
                    </TableRow>
                    <TableRow className='product-detail-table'>
                        <TableCell className='product-detail-table-cell' style={{ color: '#878787',verticalAlign:'baseline' }} >Description</TableCell>
                        <TableCell className='product-detail-table-cell' >{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}

export default ProductDetail
