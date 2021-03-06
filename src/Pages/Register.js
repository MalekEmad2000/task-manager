import React from 'react'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'
import Axios from 'axios'
import './styles.css'

function Register() {
  const [Username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMessage ,setErrorMessage]=React.useState("")

  const navigate1 = useNavigate()






  const submitUser = () => {
    Axios.post('http://localhost:3001/api/registerUser', {
      Username: Username,
      password: password,
    }).then((e) => {
      //=================================================
      // if e['data'] == 'FINE'
      // user registered successfully
      // else if e['data'] == 'NOT FINE'
      // userName already taken
      //=================================================

      if (e['data'] == 'FINE') {
        navigate1('/')
      } else {
          setErrorMessage("user name already exists")
      }
    })
  }

  function handlechange(event) {
    const { name, value } = event.target

    name === 'Username' ? setUserName(value) : setPassword(value)
  }

  function handleClick(event) {

   if(Username ==="" || password ===""){
  
          setErrorMessage("please fill all fields")
             
   }else{
    submitUser()
   }
    event.preventDefault()
  }

  return (
    <div className='container' id='c2'>
      <Helmet>
        <link rel='stylesheet' href='login.css' />
      </Helmet>
      <img
        className='circle-img'
        src='data:image/jpeg;base64,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 '
        alt='avatar_img'
      />
      <h2>Enter Password and user name</h2>
      <form className='form'>
        <input
          onChange={handlechange}
          name='Username'
          type='text'
          placeholder='Username'
        />
        <input
          onChange={handlechange}
          name='Password'
          type='password'
          placeholder='Password'
          autoComplete=''
        />

        <button onClick={handleClick} type='submit'>
          Register
        </button>
      </form>

      <p className='error'>{errorMessage}</p>
    </div>
  )
}

export default Register
