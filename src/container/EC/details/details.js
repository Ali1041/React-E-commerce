import React,{useEffect,useState} from 'react';
import Nav from '../nav';
import {connect} from 'react-redux';
import {detail_item,add_cart} from '../../../actions/EC/actionCreater';
import {Redirect} from 'react-router-dom'
import Dropdown from '../dropdown/dropdown';
import './details.css'

const Details=({detail_item,match,detail_of_items,add_cart,to_login,history,crumbs,location},props)=>{
    
    const [data,setdata]=useState({
        quantity:0,
        loaded:false,
        picture:null
    
    })
    const {loaded,quantity,picture}=data
    const slug=match.params.slug
    
    useEffect(()=>{
    
        async function dispatch(){
    
            await detail_item(slug)
    
            setdata({
                ...data,
                loaded:true,
    
            })
    
        }
    
        dispatch()
        return ()=>null
    },[])



    const clicked=(item_id,brand,name,final_quantity)=>{
        async function dispatch(){
            await add_cart(item_id,brand,name,final_quantity)

        }
        dispatch();

    }

    if(to_login){
        return <Redirect to='/' />
    }
    const change=(e)=>{
        setdata({
            ...data,
            quantity:e.target.value
        })
    }
    const quantitychange=(e)=>{
        const prequantity=quantity
        const x=e.target.innerHTML
        if(x==='+'){
            setdata({
                ...data,
                quantity:quantity+1
            })
        }       
        if(x==='-'&&quantity>=0){
            setdata({
                ...data,
                quantity:quantity-1
            })
        }

    }
    const thisclick=(e)=>{
        setdata({
            ...data,
            picture:e.target.src
        })
    }
    console.log(detail_of_items)
    return(
        <Nav>
            <div className='m-2'>
                   <Dropdown/>
            </div>
            {
                loaded?(
                    <div className='p-3' style={{width:90+'%',margin:"auto"}}>
                    <div className='container row' >
                        <div className='col-md-3 '>
                            <img src={picture||detail_of_items.pic[0].pic} style={{height:200,width:200}} alt={detail_of_items.name+'picture'}/>
                            <div className='d-flex'>{
                                detail_of_items.pic.map((item)=>{
                                    return(
                                        <img key={item.pic}
                                        src={item.pic}
                                         onClick={thisclick} 
                                         style={{height:30,width:30,display:"block"}}
                                          className='mr-2 mt-2' 
                                          alt={detail_of_items.name+'picture'}/>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>{detail_of_items.name}</p>
                            <p>Brand: {detail_of_items.brand}</p>
                            <hr/>
                            <h3>Price: ${detail_of_items.price}</h3>
                            <p>Quantity</p>
                            <button type='number' onClick={quantitychange} className='btn btn-secondary'>-</button>
                            <input type='number' onChange={change} value={quantity} className='mr-2 ml-2 mb-2 ' style={{width:10+'%',border:"none"}} />
                            <button type='number' onClick={quantitychange} className='btn btn-secondary'>+</button>
                            <button className='btn btn-primary'
                            onClick={()=>clicked(detail_of_items.id,detail_of_items.brand,detail_of_items.name,quantity)}>Add to cart</button>
                        </div>
                        <div className='col-md-5 text-center'>
                            <h3>Available payment options:</h3>
                        <p>Cash on delivery {
                            detail_of_items.cash_on_delivery?
                            <span style={{border:"none"}}>&#9989;</span>
                            :<span>&#10060;</span>
                            }</p>
                            <p>Online payment {
                            detail_of_items.cash_on_delivery?
                            <span>&#9989;</span>:<span>&#10060;</span>
                            }</p>
                            
                        </div>

                    </div>
                    <div className='container'>
                        <h2>Description</h2>
                        <p>{detail_of_items.description}</p>
                    </div>
                    <div className='container'>
                        <h2>Rating & Review of {detail_of_items.name}</h2>
                        <hr/>
                        <h4>Product Ratings</h4>
                        <hr/>
                        <h4>Product Reviews</h4>
                        <hr/>
                        {detail_of_items.review.map((item)=>{
                            return(
                                <div key={item.id} className='border-top '>
                                    <h3>By: {item.name}</h3>
                                    <p>{item.comment}</p>
                                    <p>Rating: {item.rating}</p>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                )
                
                :null
            }
 

        </Nav>
    )
}

const mapStateToProps=(state)=>{
    return{
        to_login:state.ecReducers.direct_login,
        cart_quantity:state.ecReducers.cart_quantity,
        detail_of_items:state.ecReducers.details
    }
}
export default connect(mapStateToProps,{detail_item,add_cart})(Details);