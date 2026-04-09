import React,{useState,useEffect} from 'react'
import Productform from './Productform'
import axios from 'axios'
import Productcard from './Productcard';



const Products = () => {
    const[products,setProducts]=useState([]);

    const fetchProducts = async()=>{
        try {
            const res = await axios.get("http://localhost:5600/api/products")
            setProducts(res.data)
        }catch(err) {
            console.error(err);
        }
    }

    useEffect(()=>{
     fetchProducts();
    },[]);

  return <>
  <div className='flex gap-5'>
 <Productform fetchProducts={fetchProducts}/>
 
  <div>
    {
        
        products.map(x=>(
            <div>
            <Productcard product={x} />
            </div>
        ))
        
    }
    
  </div>

  </div>
  
  
  </>
}

export default Products