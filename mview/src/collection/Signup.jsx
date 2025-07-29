import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup({setAllow}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [repass,setRepass] = useState('')
  const [err,setErr] = useState('')

  const navigate = useNavigate()

  const clear = ()=>{
    setErr('')
    setName('')
    setEmail('')
    setPass('')
    setRepass('')
  }

  const log = ()=>{
    navigate('/login')
  }

  const check = async ()=>{
    if (name == '' || email == '' || pass == '' || repass == '') {
      setErr('Fill The Form!')
    }else{
      if (pass !== repass) {
        setErr('Check Password!')
      }
      else{
        clear()
        await axios.post('https://fashion-j7sb.onrender.com/signup',{'name':name,email:email,'password':pass})
        .then((res)=>{
          const data = res.json()
          if (data.method == true) {
            setErr('User Already Signed!')
          }else{
            navigate('/')
            setAllow(true)
          }
        })
        .catch(e=>{console.log(e)})
      }
    }
  }

  return (
    <div className='container-fluid'>
      <div className='mt-5 pt-4 d-flex justify-content-center'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <h1 className='text-center text-dark fw-bold'>Sign-Up Here</h1>
          <div className='form-group mt-4'>
            <label htmlFor="name" className='form-lable'>Enter Name</label>
            <input type="text" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' id='name'/>
          </div>
          <div className='form-group mt-2'>
            <label htmlFor="email" className='form-lable'>Enter Email</label>
            <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control' id='email'/>
          </div>
          <div className='form-group mt-2'>
            <label htmlFor="pass" className='form-lable'>Enter Password</label>
            <input type="text" className='form-control' value={pass} onChange={(e)=>{setPass(e.target.value)}} id='pass' placeholder='Enter Password'/>
          </div>
          <div className='form-group mt-2'>
            <label htmlFor="repass" className='form-lable'>Re-enter Password</label>
            <input type="text" className='form-control' value={repass} onChange={(e)=>{setRepass(e.target.value)}} id='repass' placeholder='Re-enter Password'/>
          </div>
          <p className='text-danger text-center pt-2 fw-bold fs-5'>{err}</p>
          <button className='btn btn-primary px-5' onClick={check} style={{position:'relative',left:'13%'}}>Sign-In</button>
          <p className='text-center my-2'>...or...</p>
          <button className='btn btn-success px-5 mt-1' onClick={log} style={{position:'relative',left:'15%'}}>Log-In</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
