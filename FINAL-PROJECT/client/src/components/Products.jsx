import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/Productform'
import ProductCard from '../components/Productcard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editproduct,setEditproduct]= useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5600/api/products')
      setProducts(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const hd = async (id)=> {
    try {
        await axios.delete(`http://localhost:5600/api/products/${id}`);
        fetchProducts();

        if(editproduct && editproduct._id === id){
            setEditproduct(null)
        }
    } catch(err) {
        console.log(err);
    }
  }

  const he = (product)=>{
    setEditproduct(product);

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="text-gray-600 mt-2">
            Add product and view all product cards from backend API
          </p>
        </div>

        <div className="mb-10">
          <ProductForm fetchProducts={fetchProducts} editproduct={editproduct} setEditproduct={setEditproduct} />
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Product List</h3>
        </div>

        {loading ? (
          <p className="text-center text-lg font-medium text-blue-600">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-red-500 font-medium">No products found</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} onEdit={he} onDelete={hd} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products