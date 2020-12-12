import React from 'react'
import {connect} from 'react-redux'
import {verify} from '../../../actions/account/auth'
import {Link} from 'react-router-dom'
import Navbar from '../../HOC'

const Verify=({match,verify})=>{
    const clicked=(e)=>{
        e.preventDefault()
        const uid=match.params.uid
        const token=match.params.token
        verify(uid,token)
    }
    return(
        <Navbar>
        <div>
            <h1>Click below to verify your account</h1>
            <Link to='/' onClick={clicked}>Click here</Link>
        </div>
        </Navbar>
    )
}
export default connect(null,{verify})(Verify);