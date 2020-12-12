import axios from 'axios';
import * as type from './action'





export const get_cart=()=>async dispatch=>{
    const token=localStorage.getItem('access')
    console.log(token)
    const config={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${token}`
        }
    }
    try{
        const res=await axios.get(`http://localhost:8000/cart/items/`,config)
        dispatch({
            type:type.GET_CART_SUCCESS,
            payload:res.data
        })
    }
    catch{
        dispatch({
            type:type.GET_CART_FAIL
        })
    }
}










export const add_cart=(item_id,brand,name,quantity)=>async dispatch=>{
    const token=localStorage.getItem('access')
    console.log(token)
    const config={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${token}`
        }
    }
    const body=JSON.stringify({item_id,brand,name,quantity})
    console.log(config.headers)
    try{
        await axios.post('http://localhost:8000/add/cart/',body,config)
        dispatch({
            type:type.ADD_TO_CART_SUCCESS
        })
    }
    catch{
        dispatch({
            type:type.ADD_TO_CART_FAIL
        })

    }
}




export const category_list=()=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res=await axios.get('http://localhost:8000/home/',config)
        dispatch({
            type:type.GET_CATEGORY_SUCCESS,
            payload:res.data

        })
    }
    catch{
        dispatch({
            type:type.GET_CATEGORY_FAIL
        })

    }
}
export const item_list=(slug)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'

        }

    }
    try{
        const res=await axios.get(`http://localhost:8000/category/${slug}/`,config)
        dispatch({
            type:type.GET_ITEM_SUCCESS,
            payload:res.data
        })

    }

    catch{
        dispatch({
            type:type.GET_ITEM_FAIL
        })

    }

}

export const detail_item=(slug)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        console.log(slug)
        const res=await axios.get(`http://localhost:8000/products/${slug}/`,config)
        dispatch({
            type:type.GET_DETAILS_SUCCESS,
            payload:res.data
        })
    }
    catch{
        dispatch({
            type:type.GET_DETAILS_FAIL
        })

    }
}

export const get_search=(searchvalue,searchbrand)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    // const body=JSON.stringify({searchvalue})
    try{
        console.log(searchvalue)
        const res= await axios.get(`http://localhost:8000/search/`,{
            params:{
                search:searchvalue,
                features:searchbrand,
            }

        },config)
        dispatch({
            type:type.GET_SEARCH_SUCCESS,
            payload:res.data,
            value:searchvalue
        })
    }
    catch{
        dispatch({
            type:type.GET_SEARCH_FAIL
        })
    }
}
export const deleteItem=(id)=>async dispatch=>{
        const token=localStorage.getItem('access')

    const config={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${token}`

        }
    }
    try{
            await axios.delete(`http://localhost:8000/delete/${id}`,config)
        dispatch({
            type:type.DELETE_SUCCESS
        })
        dispatch(get_cart())
    }
    catch{
            dispatch({
                type:type.DELETE_FAIL
            })
    }
}