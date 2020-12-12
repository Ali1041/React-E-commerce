import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {signup} from '../../../actions/account/auth'
import Navbar from '../../HOC'
import './signup.css'
const Signup=({signup})=>{
    const [formdata,setdata]=useState({
        email:'',
        name:'',
        password:'',
        re_password:'',
        contact_number:'',
    })
    useEffect(()=>{
        const x =document.getElementById('root');
        x.classList.add('background-signup');
        return ()=>{
            x.classList.remove('background-signup')
        }
    },[])
    
    const {email,name,password,re_password,contact_number}=formdata
    const changing=(e)=>{
        console.log(e.target.value)
        setdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        console.log(email)
        signup(email,name,password,re_password,contact_number)
    }
    return(
        <Navbar>

        <div className='container border border-rounded p-4 bg-white signup mt-5 mb-5' 
         style={{width:40+'%'}}>
            <form onSubmit={submit} style={{width:100+'%'}} >
                <legend className='text-center'>Create an account</legend>
                <hr/>
                <label>Email</label>
                <input name='email' className='form-control' type='email' onChange={changing}/>

                <label>Your name</label>
                <input name='name' className='form-control' type='text' onChange={changing}/>


                <label>Phone number</label>
                <input name='contact_number' className='form-control' type='number' onChange={changing} />


                <label>Password</label>
                <input name='password' className='form-control' type='password' onChange={changing} />

                <label>Confirm Password</label>
                <input name='re_password' className='form-control' type='password' onChange={changing} />



                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
        </Navbar>

    )
}
export default connect(null,{signup})(Signup);