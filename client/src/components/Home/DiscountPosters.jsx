
import React from 'react'
import { discountPoster } from '../../objects/productNavDataObject'

//css
import '../../style/DiscountPoster.css'

const DiscountPosters = () => {


    return (
        <div  id='discount-poster-parent-div'>
            <div>
                {
                    discountPoster.map(data => (
                        <img className='discount-poster-img' src={data.url} alt='poster-1-img' />
                    ))
                }
               
            </div>
            
        </div>
    )
}

export default DiscountPosters
