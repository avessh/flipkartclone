import React from 'react'
import Carousel from 'react-multi-carousel'
import { banners } from '../../objects/productNavDataObject'
import 'react-multi-carousel/lib/styles.css';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}
 
const Banner = () => {
    return (
        <Carousel responsive={responsive} dotListClass="custom-dot-list-style"  swipeable={false} infinite={true} autoPlay={true}  autoPlaySpeed={4000}
        draggable={false}itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
            {
                banners.map(data=>(
                    <img id='bannerImg'  src={data.url} alt='bannerimg'/>
                ))
            }
        </Carousel>
    )
}

export default Banner


// use carousel from mui?