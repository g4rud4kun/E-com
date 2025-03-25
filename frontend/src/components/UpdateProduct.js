import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();


    useEffect (()=>{
        // console.warn(params)
        getProductDetails();
    },[])

const getProductDetails = async ()=>{
    console.warn(params)
    let result =  await fetch(`http://localhost:5000/product/${params.id}`, {
        headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
}

const updateProduct = async ()=> {
    console.warn(name, price, category, company);
    let result =  await fetch(`http://localhost:5000/product/${params.id}`,{
        method: 'put',
        body: JSON.stringify({name, price, category, company}),
        headers:{'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
    })
    result = await result.json();
    navigate('/')
}

return (
    <div className='addProduct'>
        <h2>Update Product</h2>
        <input className='input-box' type = "text" value={name} onChange ={(e)=>setName(e.target.value)} placeholder='Enter the name'/>

        <input className='input-box' type = "text" value={price} onChange ={(e)=>setPrice(e.target.value)} placeholder='Enter the price'/>

        <input className='input-box' type = "text" value={category} onChange ={(e)=>setCategory(e.target.value)} placeholder='Enter the category'/>

        <input className='input-box' type = "text" value={company} onChange ={(e)=>setCompany(e.target.value)} placeholder="Enter the company's name"/>

        <button onClick={updateProduct} className='appButton' type='button' >Submit</button>
    </div>
)
}

export default UpdateProduct;