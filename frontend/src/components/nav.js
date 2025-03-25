import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return(
        <div> 
            <img className='logo' alt="" src ="https://img.favpng.com/19/18/19/logo-e-commerce-electronic-business-png-favpng-eN3uDxqPs3mfprC0GG6u29kJb.jpg" />
            { auth ? <ul className='nav-ul'> 
                <li><Link to = "/" >Products</Link></li>  
                <li><Link to = "/add-product" >Add Product</Link></li>  
                <li><Link to = "/update/:id" >Update Product</Link></li> 
                <li><Link to = "/profile" >Profile</Link></li>  
                <li><Link onClick={logout} to = "/login" >Logout ({JSON.parse(auth).name})</Link></li> 
                </ul>
                : //else
                <ul className='nav-ul nav-ul-right'>
                    <li><Link to = "/signup" >Sign Up </Link></li>
                    <li><Link to = "/login" >Login</Link></li>
                </ul>
                }            
            
        </div>
    )
}

export default Nav;