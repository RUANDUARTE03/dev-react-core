import axios from 'axios'
let REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Participate {
  static Participate(user, callback) {
    if (!REGEX_EMAIL.test(user.email) || user.name.length === 0) {
      const error = []
      const errorInvalidEmail = {
        "error": true,
        "description": "Preencha com um email válido",
        "place": "email"
      }
      const errorEmptyName = {
        "error": true,
        "description": "Preencha com seu nome completo",
        "place": "name"
      }
      if (!REGEX_EMAIL.test(user.email)) {
        error.push(errorInvalidEmail)
      } else {
        error.filter(i => i.place !== "email")
      }
      if (user.name.length === 0) {
        error.push(errorEmptyName)
      } else {
        error.filter(i => i.place !== "name")
      }
      callback(error)
    } else {
      const response = []
      axios.post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        name: user.name,
        email: user.email
      })
        .then((res) => {
          response.unshift({ "error": false })
          response.push(res)
          callback(response)
        })
    }
  }
}

export default Participate