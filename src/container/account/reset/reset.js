import React,{useState} from 'react'
import {connect} from 'react-redux';
import {reset} from '../../../actions/account/auth'
import Navbar from '../../HOC';

const Reset=({reset})=>{
    const [formdata,setdata]=useState({
        email:''
    })
    const {email}=formdata

    const change=(e)=>{
        setdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        reset(email)
    }

    return(
        <Navbar>
        <div className='container' style={{width:40+'%',position:"relative",top:50}}>
            <form onSubmit={submit}>
                <label>Email</label>
                <input placeholder='Your account Email' onChange={change} type='email' name='email' required/>
                <button>Reset</button>
            </form>

        </div>
        </Navbar>
    )
}
export default connect(null,{reset})(Reset);