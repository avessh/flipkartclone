import { useEffect } from 'react'
import { Box } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Slide from './Slide'
import ProductNav from './ProductNav'

import { getProducts } from '../../redux/actions/productActions';
import {useDispatch , useSelector} from 'react-redux'

import MidSlide from './MidSlide'
import DiscountBanner from './DiscountBanner'
import DiscountPosters from './DiscountPosters'

function Home() {

  const {products} = useSelector(state => state.getProducts);
  console.log(products);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch( getProducts())
  } , [dispatch])

  return (
    <>
      <ProductNav/>
      <Box id='components'>
      <Banner/>
      <MidSlide products={products} title='Deal of the Day' timer={true}/>
      <DiscountBanner/>
      <DiscountPosters/>
      <Slide products={products} title='Top Selection' timer={false}/>
      <Slide products={products} title='Discounts for you' timer={false}/>
      <Slide products={products} title='Best Offers' timer={false}/>
      <Slide products={products} title='Suggested itmes' timer={false}/>
      </Box>
    </>
  )
}

export default Home
