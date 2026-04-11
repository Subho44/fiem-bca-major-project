import React from 'react'

const Productcard = ({ product,onEdit,onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={
          product.image
            ? product.image
            : 'https://via.placeholder.com/400x250?text=No+Image'
        }
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-green-600">₹ {product.price}</span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>

        <div className='flex gap-3'>
        <button 
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
        onClick={()=>onEdit(product)}
        >
          Edit
        </button>

         <button 
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
        onClick={()=>onDelete(product._id)}
        >
          Delete
        </button>

        </div>

        
      </div>
    </div>
  )
}

export default Productcard