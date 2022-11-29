import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import{ productNavData } from '../../objects/productNavDataObject'

const ProductNav = () => {
  return (
    <Box style={{background:'white'}}>
    <div id='productNavMainDiv'>
        {
            productNavData.map(data=>(

                <Box id='productNavComponents'>
                    <img id='productNavImg' src={data.url} alt='productNav'/>
                    <Typography id='productDetail'>{data.text}</Typography>
                </Box>

            ))
        }
    </div>
    </Box>
  )
}

export default ProductNav
