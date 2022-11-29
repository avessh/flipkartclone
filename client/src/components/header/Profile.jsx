
import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// eslint-disable-next-line
import profilestyle from '../../style/profile.css'
import { Typography } from '@mui/material';

export default function Profile({account , setAccount}) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const Logout = () => {
    setAccount('')
  }

  return (
    <div>
      <p style={{fontWeight:'bold'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {account}
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleClose(); Logout();}}>
            <PowerSettingsNewIcon color='primary' fontSize='small'/>
            <Typography id='logout'>Logout</Typography>
        </MenuItem>
        

      </Menu>
    </div>
  );
}









// import { Box } from '@mui/system'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import React from 'react'
// import { useState } from 'react'

// const Profile = ({ account }) => {

//     const [open , setOpen] = useState(true)

//     const handleClick = (event) => {
//          setOpen(true)
//     }

//     console.log(handleClick);

//     const handleClose = () => {
//         setOpen(false)
//     } 

//     return (
//         <>
//             <Box>
//                 <p >{account}</p>
//                 <Menu onClick={handleClick}
//                     anchorEl={Boolean(open)}
//                     open={open}
//                     onClose={handleClose}
                   
//                 >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 </Menu>
//             </Box>
//         </>
//     )
// }

// export default Profile
