import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {category_list} from '../../../actions/EC/actionCreater'



const Category=({category_list,list_of_categories,history},props)=>{
    const [categorydata,setdata]=useState({
        loaded:false
    })
    const {loaded}=categorydata
    // const {category,loaded}=categorydata
    useEffect(()=>{
        async function dispatched(){
            await category_list()
            setdata({
                loaded:true
            })
        }
        dispatched()
        return ()=>null

    },[])


return(
        <div className={props.className} style={{width:100+'%'}}>
            {loaded?list_of_categories.map((item)=>{
            return(
                <div key={item.id} className='p-2 d-flex '>
                    <img src={item.pic} style={{height:30,width:30}} />
                    <Link to={'/products-'+item.name.toLowerCase()}  >
                        <h5 className='m-0 ml-2'>
                            {item.name}
                        </h5>
                        </Link>
                </div>
            )
        }):null}
        </div>
)
    }
const mapStateToProps=state=>{
        return{
            list_of_categories:state.ecReducers.category
        }
}
export default connect(mapStateToProps,{category_list})(Category)