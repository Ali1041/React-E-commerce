import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import ListItem from "./ListItem";
import SideBar from "../Sidebar/sidebar";
import {Link} from 'react-router-dom'
import {get_vendor_items} from '../../../actions/Vendor/actionCreater'
const VendorHome=({get_vendor_items,itemList})=>{
    const [data,setdata]=useState({
        loaded:false,
        name:''
    })
    const {loaded,name}=data
    useEffect(()=>{
        async function dispatch(){
            await get_vendor_items('ali')
            setdata(({
                ...data,
                loaded:true,
            }))
        }
        dispatch()
    },[])
    console.log(itemList)
    return (
        <div className='d-flex'>
            {
                loaded?
                <SideBar name={itemList[0].brand} />:
            null}

        <div className='container'>
            <h1>Vendor Home page</h1>
            {
                loaded?
                    (
                        <div className='row m-0'>
                            {itemList.map((item)=>{
                                return <ListItem list={item} key={item.id} classname='col-md-3 border'/>
                            })}
                        </div>
                    ):null
            }
        </div>
    </div>
            )
}
const mapStateToProps=(state)=>{
    return{
        itemList:state.vendorReducer.vendor_items
    }
}
export default connect(mapStateToProps,{get_vendor_items})(VendorHome);