import axios from 'axios'

class Products {
  static Products(callback) {
    axios.get("https://corebiz-test.herokuapp.com/api/v1/products")
    .then((response) => {
      callback(response.data)
    })
  }
}

export default Products