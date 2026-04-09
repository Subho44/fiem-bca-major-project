import React from 'react'

const Productcard = ({product}) => {

  return <>
  <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition'>
  <img 
   src={product.image}
   alt='img'
   className='w-full h-50 object-cover'
  />
  <div className='p-5'>
    <h3>{product.name}</h3>
    <h3>{product.category}</h3>
    <h3>{product.description}</h3>
    <h3>₹{product.price}</h3>
    <h3>{product.stock}</h3>
  <button className='w-full '>View Details</button>
  </div>
  </div>
  
  </>
}

export default Productcard