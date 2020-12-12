import React from 'react';
import {Link} from 'react-router-dom'
const SideBar=({name})=>{
    console.log(name)
    return (
        <div className='border p-2 text-center' style={{position:"sticky",height:100+'vh',width:20+'%'}}>
            <h1> {name}</h1>
            <Link to='/create-item/' className='border-bottom'>Add items</Link>
            <Link>Remove items</Link>
            <Link>Edit items</Link>
            <Link>Highest sold items</Link>

        </div>
    )
}
export default SideBar;