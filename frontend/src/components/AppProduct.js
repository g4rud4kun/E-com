import React from 'react';

const AddProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState('');

const addProduct = async ()=> {
    console.warn(!name)
    if(!name || !price || !category || !company){
        setError(true);
        return false;
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result =  await fetch("http://localhost:5000/add-product", {
        method: 'post',
        body: JSON.stringify({name, price, category, company, userId}),
        headers: {'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
        
    });
    result = await result.json();
    console.warn (result);

}
    return (
        <div className='addProduct'>
            <h2>Add Product</h2>
            <input className='input-box' type = "text" value={name} onChange ={(e)=>setName(e.target.value)} placeholder='Enter the name'/>
            {error && !name && <span className='invalid-input'>Enter the valid input!</span>}

            <input className='input-box' type = "text" value={price} onChange ={(e)=>setPrice(e.target.value)} placeholder='Enter the price'/>
            {error && !price && <span className='invalid-input'>Enter the valid input!</span>}

            <input className='input-box' type = "text" value={category} onChange ={(e)=>setCategory(e.target.value)} placeholder='Enter the category'/>
            {error && !category && <span className='invalid-input'>Enter the valid input!</span>}

            <input className='input-box' type = "text" value={company} onChange ={(e)=>setCompany(e.target.value)} placeholder="Enter the company's name"/>
            {error && !company && <span className='invalid-input'>Enter the valid input!</span>}

            <button onClick={addProduct} className='appButton' type='button' >Submit</button>
        </div>
    )
}

export default AddProduct;