import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import FormParticipate from './_formPaticipate'
import Service from '../services/participate'
import '../styles/participeNews.css'

export default function ParticipeNews() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState([])

  const submitForm = () => {
    const user = {
      name: name,
      email: email
    }
    Service.Participate(user, (res) => {
      if (res?.filter(i => i?.error === true)?.length > 0) {
        setError(res)
      } else {
        setName("")
        setEmail("")
        setError([])
      }
    })
  }

  return (
    <div id="participeNews">
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Participe de nossas news com promoções e novidades!
      </Typography>
      <div className="form-participe">
        <FormParticipate
          valueName={name}
          onChangeName={(e) => { setName(e.target.value) }}
          valueEmail={email}
          onChangeEmail={(e) => { setEmail(e.target.value) }}
          submit={() => { submitForm() }}
          error={error}
        />
      </div>
    </div>
  )
}
