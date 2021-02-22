import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic'
import LogoLight from '../assets/logo-light.png'
import Vector from '../assets/vector.png'
import '../styles/footer.css'

const Btn = (props) => (
  <Button
    style={{ backgroundColor: "white", width: "70%", marginTop: 20 }}
  >
    {props.startIcon}
    <Typography variant="body1" style={{ marginLeft: 25, fontWeight: "bold" }}>
      {props.description}
    </Typography>
  </Button>
)

const ImagesFooter = (props) => (
  <div className="footer-body-right">
    <Typography variant="body2">
      {props.text}
    </Typography>
    <img src={props.image} />
  </div>
)

export default function Footer() {
  return (
    <div id="mainFooter" className="row">
      <div className="footer-left col-12 col-md-4">
        <Typography variant="h6">
          <b>Localização</b>
        </Typography>
        <div className="footer-left-bar" />
        <Typography variant="subtitle2">
          Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
          Alphavile SP <br />
          brasil@corebiz.ag <br />
          + 55 11 3090 1039
        </Typography>
      </div>
      <div className="footer-center col-12 col-md-4">
        <Btn
          startIcon={<EmailIcon style={{ position: "absolute", left: 20 }} />}
          description="ENTRE EM CONTATO"
        />
        <Btn
          startIcon={<HeadsetMicIcon style={{ position: "absolute", left: 20 }} />}
          description="FALE COM O NOSSO CONSULTOR ONLINE"
        />
      </div>
      <div className="footer-right col-12 col-md-4">
        <ImagesFooter
          text="Created by"
          image={LogoLight}
        />
        <ImagesFooter
          text="Powered by"
          image={Vector}
        />
      </div>
    </div>
  )
}
