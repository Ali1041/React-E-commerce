import React,{useState,useEffect} from "react";
import Items from "../items/items";
import {get_search} from '../../../actions/EC/actionCreater'

import {connect} from 'react-redux'
const SearchItem=({get_search,searched_item,searched_name,location})=>{
    const [data,setdata]=useState({
        loaded:false
    })
    const {loaded}=data
    const x=new URLSearchParams(location.search)
    let value=''
    for (let i of x.entries()){
        value=i[0]
    }
    useEffect(()=>{
        async function dispatch(){
            await get_search(value,null)
            setdata({
                loaded:true
            })
        }
        dispatch()
    },[value])
    return(
        <div>
            {loaded?<Items passed={searched_item} />:null}


        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        searched_item: state.ecReducers.searched_item,
        searched_name:state.ecReducers.searched_value
    }
}
export default connect(mapStateToProps,{get_search})(SearchItem)