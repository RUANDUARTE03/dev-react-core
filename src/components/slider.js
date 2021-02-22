import React from 'react'
import Typography from '@material-ui/core/Typography'
import Banner from '../assets/banner.png'
import ImgBanner from '../assets/image-banner.png'
import '../styles/slider.css'

const Slider = () => (
  <div id="mainSlider">
    <div className="body-left">
      <img src={Banner} />
      <div className="container-text">
        <Typography variant="h6" style={{
          color: "white"
        }}>
          Olá, o que você está buscando?
        </Typography>
        <Typography variant="h4" style={{
          color: "white",
          fontWeight: "bold"
        }}>
          Criar ou migrar seu <br /> e-commerce?
        </Typography>
      </div>
    </div>

    <div className="body-right">
      <img src={ImgBanner} />
    </div>
  </div>
)

export default Slider
