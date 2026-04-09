import React,{useState} from 'react'
import axios from 'axios';

const Productform = ({fetchProducts}) => {
    const [formdata,setFormdata] = useState({
        name:'',
        price:'',
        category:'',
        image:'',
        description:'',
        stock:'',
    });
 const [message,setMessage] = useState('');

 const hc =(e)=> {
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value,
    });
 }

 const hs = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5600/api/products",{
        ...formdata,
        price:Number(formdata.price),
        stock:Number(formdata.stock),
      });
      setMessage("product added successfully");
      setFormdata({
        name:'',
        price:'',
        category:'',
        description:'',
        stock:'',
      });
      fetchProducts()
    } catch(err) {
        console.error(err);
    }
 }
  return <>
  <div className='mt-5'>
    {message && (
        <p>{message}</p>
    )}
  </div>

  <form onSubmit={hs} className='mt-5'>
    <input 
    type='text'
    name='name'
    placeholder='product name'
    value={formdata.name}
    onChange={hc}
    className='border'
    required
  />
  <br></br>
   <input 
    type='number'
    name='price'
    placeholder='product price'
    value={formdata.price}
    onChange={hc}
    className='border'
    required
  />
  <br></br>
   <input 
    type='text'
    name='category'
    placeholder='product category'
    value={formdata.category}
    onChange={hc}
    className='border'
    required
  />
  <br></br>
   <textarea 
    name='description'
    placeholder='product description'
    value={formdata.description}
    rows={4}
    onChange={hc}
    className='border'
    required
  > </textarea>
  <br></br>
   <input 
    type='number'
    name='stock'
    placeholder='product stock'
    value={formdata.stock}
    onChange={hc}
    className='border'
    required
  />
  <br></br>

  <button type='submit' className='border'>
    Add Product
  </button>

  </form>
  
  
  
  </>
}

export default Productform