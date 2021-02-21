import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import Shopping from '../components/shopping'
import ParticipeNews from '../components/participeNews'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Shopping />
      <ParticipeNews />
      <Footer />
    </>
  )
}
