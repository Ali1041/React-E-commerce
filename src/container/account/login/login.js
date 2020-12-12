import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../../../actions/account/auth'
import Navbar from '../../HOC';
import './login.css'
const Login=({login,is_authenticaed,history,match})=>{
    const [formdata,setdata]=useState({
        email:'',
        password:''
    });

    useEffect(()=>{
        const x =document.getElementById('root');
        x.classList.add('background');
        return ()=>{
            x.classList.remove('background')
            return null
        }

    },[])
    const {email,password}=formdata
    const change=(e)=>{
        setdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        login(email,password)
    }

    console.log(is_authenticaed)
    if(is_authenticaed){
        return <Redirect to='/' />
       // return history.goBack()
    }
 

    return(
        <Navbar>

        <div
        className='border border-medium rounded center p-3'>
            <form onSubmit={submit} style={{display:"block"}}
            >
                <legend className='text-center'>Login to your account</legend>
                <hr/>
                <div className='div'>
                    <label>Email</label>
                    <input className='input' name='email' onChange={change} type='email'/>
                </div>

                <div className='div'>
                    <label>Password</label>
                    <input name='password' className='input' type='password' onChange={change} />
                </div>
                <div className='text-center'>
                    <Link to='/reset-password'><small>Forgot password?</small></Link>
                    <button className='ml-2 mr-2 btn btn-primary'>Login</button>
                    <Link to='/signup'><small>Signup here</small></Link>
                </div>

            </form>

        </div>
        </Navbar>

    )
}
const mapToStateProps=(state)=>{
    return{
        is_authenticaed:state.accountReducers.isAuthenticated
    }
}
export default connect(mapToStateProps,{login})(Login);


