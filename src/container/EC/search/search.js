import React,{useState,useEffect} from 'react';
import './search.css'
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom'
import {get_search} from '../../../actions/EC/actionCreater'
const Search=({get_search,className,history})=>{
    // const [searchdata,setdata]=useState({
    //     loaded:false,
    //     value:null
    // })
    // const {loaded,value}=searchdata
    // const clicked=(e)=>{
    //     async function dispatch(){
    //         await get_search(e.target.previousSibling.value,null)
    //         setdata({
    //             ...searchdata,
    //             loaded:true,
    //             value:e.target.previousSibling.value
    //         })
    //     }
    //     dispatch()
    //     console.log('herer')
    // }
    // console.log(history )
    // if(loaded){
    //     // const query=[]
    //

    //
    // }
    const clicked=(e)=>{
        console.log(e)
            history.push({
            pathname:'/search-item/',
            search:'?'+e.target.previousSibling.value
        })
    }
    return(
        <div className={'d-flex '+className} >
            <input type='text' name='search' className='custom-input' style={{width:90+'%'}}  />
            <input type='submit' onClick={clicked} className='btn btn-primary' value='Search' />
        </div>
    )
}

export default withRouter(connect(null,{get_search})(Search));