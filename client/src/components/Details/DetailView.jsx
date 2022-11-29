import React from 'react'
import {useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProductDetails } from '../../redux/actions/productActions'
import ActionItems from './ActionItems'

import { Grid } from '@mui/material'

import '../../style/DetailView.css'
import ProductDetail from './ProductDetail'

const DetailView = () => {


  const { id } = useParams()

  

  const { product } = useSelector(state => state.getProductDetails)
  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))

  }, [dispatch, id, product])

  // console.log(product);
  // console.log(id);
  // console.log(getProductDetails);

  return (
    <div id='detail-view-parent-div'>
      
      {
        product && Object.keys(product).length ?

        <Grid container id='detail-view-2'>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <Grid id='detail-view-right' item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </Grid>
        </Grid>
        :
        <h1>no items </h1>
      }
    </div>
  )
}

export default DetailView
