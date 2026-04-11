import React, { useState } from 'react'
import axios from 'axios'

const Productform = ({ fetchProducts }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    stock: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:5600/api/products', {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      })

      setMessage('Product added successfully')

      setFormData({
        name: '',
        price: '',
        category: '',
        image: '',
        description: '',
        stock: '',
      })

      fetchProducts()
    } catch (error) {
      console.log(error)
      setMessage('Product not added')
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-5">Add Product</h2>

      {message && (
        <p className="mb-4 text-sm font-medium text-green-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default Productform