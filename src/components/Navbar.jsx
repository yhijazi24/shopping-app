import React from 'react'
import './navbar.css'
import { Search } from '@mui/icons-material'
import { Input } from 'style-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          <div className='navbar-lang'>EN</div>
          <div className='nav-search'>
            <Input className='nav-input' />
            <Search style={{color:'gray', fontSize:16,}}/>
          </div>
        </div>
        <div className='navbar-center'>
          <div className='nav-logo'>Scarlet Shop</div>
        </div>
        <div className='navbar-right'>
          <div className='nav-menu'>Register</div>
          <div className='nav-menu'>Sign In</div>
          <div className='nav-menu'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
