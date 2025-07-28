import React, { useEffect, useState } from 'react'
import Fetch from '../data/Fetch'

function Home() {

    const [dress,setDress] = useState([])

    useEffect(()=>{
      console.log("run");
        fetch('https://fakestoreapi.com/products')
        .then(res =>{console.log(res); return res.json()})
        .then(data => setDress(data))
        .catch(err=>console.log(err));
        
    },[])

  return (
    <div className='mt-5 pt-4'>
      <div>
        <h2 className='text-success text-center mt-1 fw-bold fs-1'>Products</h2>
        <div>
          {dress.map((d, index)=>(
            <div className='' key={index}>
              <Fetch image={d.image} title={d.title} price={d.price} description={d.description}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home