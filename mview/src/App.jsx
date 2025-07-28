import React, { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './collection/Home'
import Signup from './collection/Signup'
import Login from './collection/Login'
import Fhome from './collection/Fhome'

function App() {
  const [click,setClick] = useState(false)
  const [allow,setAllow] = useState(false)
  return (
    <div>
      <div className='container-fluid bg-dark  position-fixed top-0 w-100 z-3'>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <button className='navbar-toggler' type='button' onClick={()=>{setClick(!click)}}><span className='navbar-toggler-icon'></span></button>
          <div className={`collapse navbar-collapse ${click ? 'show' : ''}`} id='view'>
            <Link className='text-white nav-link fw-bold fs-4 pt-2' onClick={()=>{setClick(false)}} to='/'>Look's</Link>
            {allow?<Link className='text-white nav-link fw-bold fs-4 pt-2' onClick={()=>{setClick(false)}} to='/home'>Products</Link>:''}
            {!allow?<Link className='text-white nav-link fw-bold fs-4 pt-2' onClick={()=>{setClick(false)}} to='/login'>Log-In</Link>:<Link className='text-white nav-link fw-bold fs-4 pt-2' onClick={()=>{setClick(false);setAllow(false)}} to='/login'>Log-Out</Link>}
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login setAllow={setAllow}/>}/>
        <Route path='/signup' element={<Signup setAllow={setAllow}/>}/>
        <Route path='/' element={<Fhome/>}/>
      </Routes>
    </div>
  )
}

export default App
