
import React from 'react'

import Slide from './Slide'

const MidSlide = ({ products, title, timer }) => {
   // eslint-disable-next-line
    const mil_slide_style = {
        
    }

    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/ffc19fc9563916dd.jpeg?q=70';

    return (
        <div id='mid-slide-parent-div'>
            <div id='mid-slide-left-div'>
                <Slide products={products} title={title} timer={timer} />
            </div>

                <div id='mid-slide-right-div'>
                    <img id='slide-deal-ad-img' src={adURL} alt='ad' />
                </div>
            

        </div>
    )
}



export default MidSlide
