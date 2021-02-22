import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import Shopping from '../components/shopping'
import ParticipeNews from '../components/participeNews'
import Footer from '../components/footer'

export default function Home() {
  const [cart, setCart] = useState(0)

  useEffect(() => {
    const cartSize = localStorage.getItem("cart-app-corebiz")
    setCart(Number(cartSize))
  }, [])

  const addItemCart = () => {
    setCart(cart + 1)
    localStorage.setItem("cart-app-corebiz", cart + 1)
  }

  const clearCart = () => {
    setCart(0)
    localStorage.removeItem("cart-app-corebiz")
  }

  return (
    <>
      <Header
        clearCart={() => { clearCart() }}
        cart={cart}
      />
      <Slider />
      <Shopping
        addItemCart={() => { addItemCart() }}
      />
      <ParticipeNews />
      <Footer />
    </>
  )
}
