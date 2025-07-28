import React from 'react'
import { Link } from 'react-router-dom'

function Fetch({image,title,price,description}) {
  return (
    <div>
      <div className='container-fluid border-top border-2 border-success mt-3 pt-2'>
        <div className='cardmt-2'>
            <img className='card-img-top img-fluid w-25 mb-2' src={image} alt={title} />
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text text-success mt-3'>${price}</p>
                <p className=''>{description?.slice(0, 70)}...</p>
                <p><button className='btn btn-primary'>View More...</button></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fetch
