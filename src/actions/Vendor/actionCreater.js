import * as actionTypes from './action';
import axios from 'axios';


export const get_vendor_items=(brand)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res=await axios.get(`http://localhost:8000/vendor/home-page-vendor/${brand}/`,config)
        dispatch({
            type:actionTypes.VENDOR_ITEM_LIST_SUCCESS,
            payload:res.data
        })

    }
    catch {
    dispatch({
        type:actionTypes.VENDOR_ITEM_LIST_FAIL
    })
    }
}

export const add_item=(Name,Description,Price,Promotion,features,Cash_on_delivery,Online_payment)=>async dispatch=>{
    const token=localStorage.getItem('access')
    const config={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${token}`
        }
    }
    const body=JSON.stringify({Name,Description,Price,Promotion,features,Cash_on_delivery,Online_payment})
    try{
        console.log(body)
        await axios.post('http://localhost:8000/vendor/create-item-vendor/',body,config)
        dispatch({
            type:actionTypes.VENDOR_ADD_ITEM_SUCCESS,
            // payload:res.data
        })

    }
    catch{
        dispatch({
            type:actionTypes.VENDOR_ADD_ITEM_FAIL
        })
    }
}