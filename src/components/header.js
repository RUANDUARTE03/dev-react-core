import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Drawer from '@material-ui/core/Drawer';
import { MyCount, MyShopping, Modal } from './_headerFragments'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import '../styles/header.css'

export default function Header(props) {
  const [showModal, setShowModal] = useState(false)

  const confirmCancel = () => {
    confirmAlert({
      message: 'Em breve esta funcionalidade estará disponível.',
      buttons: [
        {
          label: 'Limpar Carrinho',
          onClick: () => props.clearCart()
        }
      ]
    });
  };

  return (
    <>
      <div id="mainHeader">
        <div className="col-12 col-md-3 pr-md-4 container-logo">
          {showModal ?
            <CancelIcon className="d-md-none" onClick={() => setShowModal(false)} />
            :
            <MenuIcon className="d-md-none" onClick={() => setShowModal(true)} />
          }
          <img src={Logo} />
          <div className='d-md-none mr-2' onClick={confirmCancel}>
            <MyShopping
              cart={props.cart}
            />
          </div>

        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
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
          <div className="ml-md-4" onClick={confirmCancel} style={{ cursor: "pointer" }}>
            <MyShopping
              cart={props.cart}
            />
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