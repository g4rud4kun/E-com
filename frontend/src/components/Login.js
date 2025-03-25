import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Login =()=>{
    const[email,setEmail] =React.useState('');
    const[password,setPassword] =React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{ // for navigating the user to home page
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const handleLogin = async()=> {
        console.warn(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result)
        if(result.auth){
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))
        navigate("/")
        }else {
            alert('Please enter correct details.')
        }
    }


    return(
        <div className='login'>
        <h2>Login</h2>
        <input className='input-box' type = "email" onChange ={(e)=> setEmail(e.target.value)} placeholder='Enter your email' />
        <input className='input-box' type = "password" onChange ={(e)=> setPassword(e.target.value)}  placeholder='Enter your password'/>
        <button className='appButton' type='button' onClick={handleLogin}>Login</button>
        </div>
        )
}

export default Login;