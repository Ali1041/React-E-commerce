import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Breadcrumbs from './breadcrumbs';
import {refresh_authenticated,logout} from '../../actions/account/auth'
import {connect} from 'react-redux'
import Dropdown from './dropdown/dropdown';
import Search from './search/search';
const Nav=({refresh_authenticated,children,myprops,is_authenticated,logout})=>{
    useEffect(()=>{
       async function dispatch(){
         await refresh_authenticated()
    }
    dispatch()
  },[])
    const clicked=(e)=>{
        console.log(e.target)
        logout()

    }
    return(
        <div>
        <div className='container'>
            <div className='navbar row m-0 p-0 mt-2'>
                <h2 className='col-lg-3' >Ecommerce</h2>
                <Search props={myprops} className='col-lg-6'/>
                <Link to='/' className=' col-lg-0.5' >Home</Link>
                <Link className='m-0  col-lg-0.5' to='/mycart' >Cart</Link>
                {
                    is_authenticated?<a className='m-0 col-lg-0.5' onClick={clicked}>Logout</a>:
                        <div>
                            <Link className='m-0' to='/login'>Login</Link>
                        </div>

                }
            </div>

            <div>
                <Breadcrumbs/>
            </div>
            <div>
                {children}
            </div>

        </div>
            <div className='m-0 row bg-dark p-3' style={{color:"white"}} >
                <div className='col-sm-4'>
                    <h3>Contact us</h3>
                    <small style={{display:"block"}}>
                        Help center
                    </small>
                    <small style={{display:"block"}}>
                        How to buy
                    </small>
                    <small style={{display:"block"}}>
                        how to track your order
                    </small>
                    <small style={{display:"block"}}>
                        Daraz Shop
                    </small>
                    <small style={{display:"block"}}>
                        Return & Refunds
                    </small>
                    <small style={{display:"block"}}>
                        Purchase Protection
                     </small>
                </div>
                <div className='col-sm-4'>
                    <h3>About us</h3>
                    <small style={{display:"block"}}>
                        Digital payments
                    </small>
                    <small style={{display:"block"}}>
                        Careers
                    </small>
                    <small style={{display:"block"}}>
                        Privacy Policy
                    </small>
                    <small style={{display:"block"}}>
                        Terms and conditions
                    </small>
                    <small style={{display:"block"}}>
                        Daraz Blog
                    </small>
                </div>
                <div className='col-sm-4'>
                    <h3>Follow us at</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>

            </div>
            <p className='text-center'>Copyright&copy;</p>


        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        is_authenticated:state.accountReducers.isAuthenticated
    }
}
export default connect(mapStateToProps, {refresh_authenticated,logout})(Nav);