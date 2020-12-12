import React,{useState} from 'react';
import Category from '../category/category';
import './dropdown.css'
const Dropdown=()=>{

    const clicked=(e)=>{
        
    }

    return(
        <div className='dropdown custom-dropdown ' style={{display:"inline-block"}}>
            <button className='btn btn-default dropdown-toggle '  type="button"  
            >Categories</button>
            <div className="dropdown-menu p-0"  style={{minWidth:240+'%',maxWidth:"fit-content"}} >
                <Category className='dropdown-item bg-primary' />

            </div>  
        </div>
    )
};
export default Dropdown;