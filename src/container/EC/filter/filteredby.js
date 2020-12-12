import React from 'react';

const Filter=(props)=>{
    return(
        <div className='d-flex align-items-center'>
            <p className='m-0'>Filtered by:</p>
            <div className='d-flex border p-2 ml-2' style={{width:"fit-content",borderRadius:20}}>
                <span className >{props.name}</span>
                <span className='ml-2' style={{cursor:"pointer"}} onClick={props.remove}>x</span>
            </div>
        </div>
    )
}
export default Filter;
