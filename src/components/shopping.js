import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Services from '../services/products'
import ProductList from './_productList'
import '../styles/shopping.css'

export default function Shopping() {
  const [loading, setLoading] = useState(false)
  const [showDirections, setShowDirections] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    Services.Products((res) => {
      setProducts(res)
      setLoading(false)

      const resizeObserver = new ResizeObserver(() => {
        const productSize = res.length
        const divBody = document.getElementById("body-products")?.offsetWidth
        const divProduct = document.getElementById("product")?.offsetWidth

        const divProductSize = productSize * divProduct

        const displayDirections = divBody < divProductSize

        setShowDirections(displayDirections)
      })
      resizeObserver.observe(document.getElementById("root"));

    })

  }, [])

  if (loading) {
    return (
      <div id="myShopping">
        <div className="spinner-border" role="status">
          <span className="visually-hidden" />
        </div>
      </div>
    )
  }

  const scroll = (direction) => {
    const widthScroll = document.getElementById("product").offsetWidth
    direction === "right" ?
      document.getElementById("body-products").scrollLeft += widthScroll
      :
      document.getElementById("body-products").scrollLeft -= widthScroll
  }

  return (
    <div id="myShopping">
      <div className="container-shopping">
        <Typography variant="h5" style={{ fontWeight: "bold" }} >
          Mais Vendidos
        </Typography>
        <div className="bar" />
      </div>
      <div className="container-products">
        <div id="body-products">
          {products.map((product, index) => {
            return (
              <ProductList
                product={product}
                index={index}
              />
            )
          })}
        </div>
        <div className="directions" style={showDirections ? { visibility: "inherit" } : { visibility: "hidden" }}>
          <ChevronLeftIcon onClick={() => { scroll("left") }} style={{ cursor: "pointer" }} />
          <ChevronRightIcon onClick={() => { scroll("right") }} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  )
}
