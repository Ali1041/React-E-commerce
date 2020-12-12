import axios from 'axios';
import * as type from './actions';


export const logout=()=>async dispatch=>{
        localStorage.removeItem('access')
        const token=localStorage.getItem('access')
        console.log(token)
        dispatch({
            type:type.LOGOUT_SUCCESS
        })

}




export const refresh_authenticated=()=>dispatch=>{
    const token=localStorage.getItem('access')
    if(token){
        console.log('here')
        dispatch({
            type:type.REFRESH_LOGIN_SUCCESS
        })
        dispatch(load_user())
    }
    else{
        dispatch({
            type:type.REFRESH_LOGIN_FAIL
        })
    }
}


export const load_customeruser=(res)=>async dispatch=>{
    const token=localStorage.getItem('access')
    const config={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${token}`
        }
    }
    const id=res.data.id
    const body=JSON.stringify({id})
    try{
        console.log(id)
        const res=await axios.get(`http://localhost:8000/account/get-current-user/${id}`,config)
        dispatch({
            type:type.USER_LOADED_SUCCESS,
            payload:res.data
        })
        console.log(res)
    }
    catch {
        console.log('hererernbwkhfbwj')
          dispatch({
                type:type.USER_LOADED_FAIL
            })
    }
}


export const load_user=()=>async dispatch=>{
    if(localStorage.getItem('access')){
        console.log(localStorage.getItem('access'))
        const config={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                'Accept':'application/json'
            }
        }
        try{
            const res=await axios.get('http://localhost:8000/auth/users/me/',config)
                        console.log(res)

            dispatch(load_customeruser(res))
        }
        catch{
            dispatch({
                type:type.USER_LOADED_FAIL
            })

        }
    
    }
    else{
        dispatch({
            type:type.USER_LOADED_FAIL
        })
    }
}

export const customer_signup=(user,contact_number)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body=JSON.stringify({user,contact_number})
    try{
        console.log(body)
        await axios.post('http://localhost:8000/account/create-customer/',body,config)
        alert('Please check your email for account verification link')
        dispatch()
    }
    catch{
        console.log('error while customer creating')
    }
}

export const signup=(email,name,password,re_password,contact_number)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({
        email,
        name,
        password,
        re_password,
        contact_number,
    })
    try{
        const res=await axios.post('http://localhost:8000/auth/users/',body,config)
        dispatch({
            type:type.SIGNUP_SUCCESS,
            payload:res.data
        })
        console.log(res.data.id,typeof contact_number)
        let x=parseInt(contact_number)
        dispatch(customer_signup(res.data.id,x))
    }
    catch{
        dispatch({
            type:type.SIGNUP_FAIL
        })


    }
}


export const verify=(uid,token)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({uid,token})

    try{
        await axios.post('http://localhost:8000/auth/users/activation/',body,config)
        dispatch({
            type:type.VERIFY_SUCCESS
        })
       
    }
    catch{
        dispatch({
            type:type.VERIFY_FAIL
        })

    }
}

export const login=(email,password)=>async dispatch=>{
    const config={
        headers:{
            'Content-type':'application/json'
        }
    }
    const body=JSON.stringify({email,password})
    try{
        const res=await axios.post('http://localhost:8000/auth/jwt/create/',body,config)
        dispatch({
            type:type.LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(load_user())
    }
    catch{
        dispatch({
            type:type.LOGIN_FAIL
        })
    }

}



export const reset=(email)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json',
        }
    }
    const body=JSON.stringify({email})
    try{
        console.log(body)
        await axios.post('http://localhost:8000/auth/users/reset_password/',body,config)
        dispatch({
            type:type.RESET_PASSWORD_SUCCESS
        })
    }
    catch{

        dispatch({
            type:type.RESET_PASSWORD_FAIL
        })
    }
}


export const confirm_password=(uid,token,new_password,re_new_password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({uid,token,new_password,re_new_password})
    try{
        await axios.post('http://localhost:8000/auth/users/reset_password_confirm/',body,config)
        dispatch({
            type:type.CONFIRM_PASSWORD_SUCCESS
        })
    } 
    catch{
        dispatch({
            type:type.CONFIRM_PASSWORD_FAIL
        })

    }

}