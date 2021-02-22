import React from 'react'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button'

const ProductList = (props) => (
  <div id='product' key={props.index}>
    <img src={props.product.imageUrl} />
    <div className="product-description">
      <Typography variant="subtitle1" className="title-product">{props.product.productName}</Typography>
      <Rating value={props.product.stars} size="small" readOnly />
      <Typography
        variant="body2"
        style={props.product.listPrice ?
          { textDecoration: "line-through", color: "grey" } :
          { visibility: "hidden" }}
      >
        {`de
          ${(props.product.listPrice / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          `}
      </Typography>
      <Typography variant="h6">
        <b>{`por
          ${(props.product.price / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          `}</b>
      </Typography>
      <Typography
        variant="body2"
        style={props.product.installments.length > 0 ?
          { color: "grey" } :
          { visibility: "hidden" }}
      >
        {`ou em 
          ${props.product.installments.map(n => n.quantity)}x de R$ 
          ${props.product.installments.map(n => (
          `${(n.value / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`
        ))}`}
      </Typography>
      <div className="actions">
        <Button style={{
          backgroundColor: 'black',
          color: 'white',
          padding: "5px 25px",
          marginTop: 20
        }}
          onClick={props.addItemCart}
        >
          COMPRAR
          </Button>
      </div>
    </div>
  </div>
)

export default ProductList
