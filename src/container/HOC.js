import React from 'react';
import {Link} from 'react-router-dom';
import './HOC.css'
const Navbar=(props)=>{
    return(
        <div>
            <div className='navbar border-bottom p-2 bg-white'>
                <h2 style={{width:70+'%',margin:"auto"}}>
                    E-commerce
                    </h2>
                <Link to='/' style={{textDecoration:"none",color:"black"}} className='navbar-login'>Home</Link>
                <Link to='/login' style={{textDecoration:"none",color:"black"}} className='navbar-login ml-2 mr-2'>Login</Link>
                <Link to='/signup' className=' navbar-login mr-3' style={{textDecoration:"none",color:"black"}}>
                    Signup</Link>
            </div>
            {props.children}
        </div>
    )
}
export default Navbar;