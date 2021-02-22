import React from 'react'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MyCount = () => (
  <div className="d-flex">
    <PersonOutlineIcon />
    <Typography variant="body1">
      Minha conta
    </Typography>
  </div>
)

const MyShopping = (props) => (
  <Badge badgeContent={props.cart} color="secondary">
    <ShoppingCartIcon />
  </Badge>
)

const Modal = () => (
  <div className="container-modal">
    <MyCount />
  </div>
)

export { MyCount, MyShopping, Modal }