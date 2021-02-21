import React from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

const InputForm = (props) => {
  return (
    <FormControl error={props.error ? true : false}>
      <Input
        className="input-participate"
        style={{
          fontWeight: "bold",
          color: "black"
        }}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error ?
        <FormHelperText>{props.description}</FormHelperText>
        : null
      }
    </FormControl>
  )
}

const FormPaticipate = (props) => {
  return (
    <>
      <InputForm
        placeholder="Digite seu nome"
        value={props.valueName}
        onChange={props.onChangeName}
        error={props.error?.filter(i => i.place === "name").length > 0 ? true : false}
        description={props.error?.filter(i => i.place === "name")[0]?.description}
      />
      <InputForm
        placeholder="Digite seu email"
        value={props.valueEmail}
        onChange={props.onChangeEmail}
        error={props.error?.filter(i => i.place === "email").length > 0 ? true : false}
        description={props.error?.filter(i => i.place === "email")[0]?.description}
      />
      <Button style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        fontSize: 12,
        fontWeight: "bold",
        height: 40
      }}
        onClick={() => { props.submit() }}
      >
        Eu quero!
      </Button>
    </>
  )
}

export default FormPaticipate