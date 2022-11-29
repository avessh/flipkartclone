import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';

import { Link } from 'react-router-dom'

//styling
import '../../style/Slide.css'

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span'>{hours}: {minutes}: {seconds} Left</Box>
    }
    return (
        <Box id='slide-parent-div'>
            <Box id='slide-child-deal-div'>
                <Typography id='slide-child-deal-text'>{title}</Typography>
                {
                    timer &&
                    <Box id='slide-child-deal-child-timer-div'>
                        <img src={timerURL} alt='timerimg' style={{ width: '24px' }} />
                        <Box id='slide-deal-timer'>
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Box>

                    </Box>
                }

                <Button id='slide-deal-viewbtn' variant='contained' color='primary'>View All</Button>
            </Box>
            <Divider />
            <Carousel responsive={responsive} swipeable={false} draggable={false} centerMode={true} itemClass="carousel-item-padding-40-px" containerClass="carousel-container" dotListClass="custom-dot-list-style"  >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            <Box textAlign='center' id='slide-items'>
                                <img id='slide-items-img' src={product.url} alt='product_img' />
                                <Typography id='slide-items-shortTitle' >{product.title.shortTitle}</Typography>
                                <Typography id='slide-items-discount-text' >{product.discount}</Typography>
                                <Typography id='slide-items-tagline' >{product.tagline}</Typography>
                            </Box>
                        </Link>

                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide
