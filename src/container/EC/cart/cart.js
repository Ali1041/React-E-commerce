import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import Navbar from '../../HOC';
import {get_cart,deleteItem} from '../../../actions/EC/actionCreater';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Cart=({get_cart,item_in_cart,is_authenticated,deleteItem})=>{
    const [cartdata,setdata]=useState({
        loaded:false
    })
    const {loaded}=cartdata
    useEffect(()=>{
        async function dispatch(){
            await get_cart()
            setdata({
                loaded:true
            })
        }
        dispatch()
        return ()=>{
            return null}
    },[])
    const clicked=(e)=>{
        console.log(e)
        async function dispatch(){
            await deleteItem(e)
        }
        dispatch()
    }
    let TOTAL_PRICE=0
    if(!is_authenticated){
        return <Redirect to='/login' />
    }
    return(
        <Navbar>
            <div className='container text-center mt-5 p-3 '>
                <h1>Your cart</h1>
                {loaded&&item_in_cart?
                (item_in_cart.map((item)=>{
                    console.log(item)
                    TOTAL_PRICE+=item.price
                    return(
                        <div key={item.id} className='list-group-item d-flex '>
                            <h4 style={{width:100+'%'}} className='m-0 d-flex align-items-center justify-content-center' >{item.quantity}X {item.name} by {item.brand}: ${item.price}
                            </h4>
                            <button className='btn btn-danger' onClick={()=>clicked(item.id)} >x</button>
                        </div>
                    )

                }))
                :<h1>Add to your cart</h1>}
                <h3>Total price: ${TOTAL_PRICE}</h3>
                    <Link to='/home' className='btn btn-primary' >
                        Continue to Shop
                    </Link>
                    <Link to='/checkout' className='btn btn-secondary'>
                        Proceed to checkout
                        </Link>
            </div>
        </Navbar>
    )
}

const mapStateToProps=(state)=>{
    return{
        item_in_cart:state.ecReducers.cart,
        is_authenticated:state.accountReducers.isAuthenticated
    }
}

export default connect(mapStateToProps,{get_cart,deleteItem})(Cart);