import React,{useState} from 'react'
import {connect} from 'react-redux';
import {confirm_password} from '../../../actions/account/auth'
import Navbar from '../../HOC';

const Newpassword=({match,confirm_password})=>{
    const [formdata,setdata]=useState({
        new_passwod:'',
        re_new_password:''
    })
    const {new_passwod,re_new_password}=formdata
    const change=(e)=>{
        setdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        const uid=match.params.uid
        const token=match.params.token
        confirm_password(uid,token,new_passwod,re_new_password)
    }
    return(
        <Navbar>

        <div className='container mt-5' style={{width:40+'%'}}>
            <form onSubmit={submit}>
                <label>New Password</label>
                <input type='password' onChange={change} name='new_password' placeholder='New password' />
                <input type='password' onChange={change} name='re_new_password' placeholder='Confirm password' />
                <button>Submit</button>

            </form>
        </div>
        </Navbar>

    )
}
export default connect(null,{confirm_password})(Newpassword);