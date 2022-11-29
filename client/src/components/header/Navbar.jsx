import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Search from './Search';
import Buttons from './Buttons';
import { Link } from 'react-router-dom'
import { IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ButtonsMobile from './ButtonMobile';

const Header = () => {

  const FlipkartLogo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const FlipkartPlusURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const list = () => (
    <Box id='menu-items' style={{width:'300px'}} onClick={handleClose}>
      <List>
        <ListItem button>
         <ButtonsMobile/>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar id='appbar'>
      <Toolbar id='toolbar'>
        <IconButton id='menuBtn' style={{ color: 'inherit' }} onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Box id='flipkar-logo-box' >

          <Link to={'/'}>
            <img src={FlipkartLogo} alt='flipkart logo' style={{ width: 75 }} />
          </Link>
          <Box id='flipkart-plus-box'>
            <Typography id='flipkart-logo-below-text'>Explore <span id='flipkartplus'> Plus</span></Typography>
            <img id='flipkart-plus-img' src={FlipkartPlusURL} alt='flipkartplusimg' />
          </Box>
        </Box>
        <Search />
        <div id='loginbtn'>
          <Buttons />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
