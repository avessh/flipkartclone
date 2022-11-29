import { Box } from '@mui/system'
import React from 'react'

//css
import '../../style/DiscountBanner.css'

const DiscountBanner = () => {
    
    const discountBannerImgURL = 'https://rukminim1.flixcart.com/fk-p-flap/4376/860/image/87da51544bff6617.jpg?q=50'

  return (
    <Box id='discount-banner-parent-div'>
        <img id='discount-banner-img' src={discountBannerImgURL} alt='discountbannerimg'/>
    </Box>
  )
}

export default DiscountBanner
