import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Badge from '@material-ui/core/Badge'
import Drawer from '@material-ui/core/Drawer';

import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/header.css'

export default function Header() {
  const [showModal, setShowModal] = useState(false)

  const MyCount = () => (
    <div className="d-flex">
      <PersonOutlineIcon />
      <Typography variant="body1">
        Minha conta
      </Typography>
    </div>
  )

  const MyShopping = () => (
    //Change Later
    <Badge badgeContent={0} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  )

  const Modal = () => (
    <div className="container-modal">
      <CancelIcon className="btn-close-modal" onClick={() => setShowModal(false)} />
      <MyCount />
    </div>
  )

  return (
    <>
      <div id="mainNav">
        <div className="col-12 col-md-3 pr-md-4 container-logo">
          <MenuIcon className="d-md-none" onClick={() => setShowModal(true)} />
          <img src={Logo} />
          <div className='d-md-none mr-2'>
            <MyShopping />
          </div>

        </div>
        <div className="col-12 col-md-6">
          <TextField
            fullWidth
            label="O que está procurando?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="col-3 container-actions">
          <MyCount />
          <div className="ml-md-4">
            <MyShopping />
          </div>
        </div>
      </div>
      <Drawer
        anchor={"left"}
        open={showModal}
      >
        <Modal
          closeModal={() => setShowModal(false)}
        />
      </Drawer>
    </>
  )
}