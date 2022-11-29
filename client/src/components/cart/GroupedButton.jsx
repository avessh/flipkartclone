import { ButtonGroup, Button } from '@mui/material'
import React from 'react'

const GroupedButton = () => {
  return (
    <ButtonGroup id='cart-items-buttons'>
        <Button id='toggleBtn-negative'>-</Button>
        <Button>1</Button>
        <Button  id='toggleBtn-positive'>+</Button>
    </ButtonGroup>
  )
}

export default GroupedButton
