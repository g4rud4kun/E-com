import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = ()=>{
    const [name,setName] = useState("");  // to get the data 
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{ // for navigating the user to home page
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const collectData = async ()=>{
        console.warn(name, email, password)
        let result = await fetch('http://localhost:5000/signup',{
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result))
    localStorage.setItem("token", JSON.stringify(result.auth))
        navigate('/');
}

    return(  // basic structure like html
        <div className='register'>
        <h2>Register</h2>
        <input className='input-box' type = "text" value={name} onChange ={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
        <input className='input-box' type = "email" value={email} onChange ={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
        <input className='input-box' type = "password" value={password} onChange ={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
        <button onClick={collectData} className='appButton' type='button' >Sign Up</button>
        </div>
    )
}

export default SignUp; 