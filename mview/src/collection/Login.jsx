import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login({setAllow}) {
  const [email,setEmail] = useState('')
  const [pass,SetPass] = useState('')
  const [check,setCheck] = useState('')

  const navigate = useNavigate()

  const sign = ()=>{
    navigate('/signup')
  }
 
  const log = ()=>{
    if (email !== '' && pass !== '') {
      axios.post('https://fashion-j7sb.onrender.com/login',{'email':email,'password':pass})
      .then((res)=>{
        const out = res.data
          if (out.method == true) {
            setCheck('')
            navigate('/')
            setAllow(true)
          }else{
            setCheck('Invalid data!')
        }
      })
      .catch((e)=>{console.log(e);
      }) 
    }else{
      setCheck('Fill The Form!')
    }
  }


  return (
    <div className='container-fluid'>
      <div className='mt-4 pt-5 p-5'>
        <h1 className='text-dark fw-bold text-center mt-4'>Log-In  Here</h1>
        <div className='form-group mt-3'>
          <label className='form-lable' htmlFor="email">Enter email</label>
          <input className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text"placeholder='Enter Email' id='email' />
        </div>
        <div className='form-group mt-3'>
          <label className='form-lable' htmlFor="pass">Enter Password</label>
          <input className='form-control'value={pass} onChange={(e)=>{SetPass(e.target.value)}} type="text" placeholder='Enter Password' id='pass'/>
        </div>
        <p className='text-danger text-center my-3 fw-bold fs-5'>{check}</p>
        <button className='btn btn-primary px-5 mt-1'onClick={log} style={{position:'relative',left:'22%'}}>Log-In</button>
        <p className='text-center my-2'>...or...</p>
        <button className='btn btn-success px-5 mt-1' onClick={sign} style={{position:'relative',left:'20%'}}>Sign-Up</button>
      </div>
    </div>
  )
}

export default Login
