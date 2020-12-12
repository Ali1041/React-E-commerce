import React,{useEffect,useState} from 'react';
import Nav from '../nav';
import {item_list,get_search} from '../../../actions/EC/actionCreater'
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'
import './items.css'
import Dropdown from '../dropdown/dropdown';
import Filter from '../filter/filteredby'
import ItemFilter from './itemfilter';

const Items=({item_list,item_in_category,match,get_search,passed,name})=>{
    const [data,setdata]=useState({
        loaded:false,
        filter_load:false,
        filter_brand:'',
        categories:passed
    })
    const {loaded,filter_load,filter_brand,categories}=data

        useEffect(()=>{

            async function dispatch() {
                console.log('getting here')
                await item_list(slug)

                setdata({
                    ...data,
                    loaded: true,
                    categories: uniq

                })


        }
        dispatch()
            .catch((err)=>{
            alert(err)
        })


        return ()=>{
            // setdata({
            //     ...data,
            //     loaded: false
            // })
            return null
        }
    },[match&&match.params.slug])
         let slug=''
    let x=[]
    let uniq=[]
    if(item_in_category===null){
    }
    if(match!==undefined){
        console.log(match,'match here')
        slug=match.params.slug.toLowerCase()

    }
    else if (passed!==null){
        if(passed && passed.length)
        slug=passed[0].category.toLowerCase()
        for (let i of passed){
            x.push(i.category)

            }
         uniq=[...new Set(x)]
        // setdata({
        //     ...data,
        //     categories: uniq
        // })
        }


    // else{
    //     return <Redirect to='/home' />
    // }




    const clicked=(e)=>{
        if(filter_load){
            setdata({
                ...data,
                filter_load: false
            })
          return item_list(slug)
        }
        setdata({
            ...data,
            filter_load: true,
            filter_brand:e.target.name
        })
        get_search(null,e.target.name)
    }

    console.log(item_in_category,categories)
    return(
        <Nav match={match}>
            <div className='m-2 d-flex align-items-center'>
                   <Dropdown/>
                   {
                loaded&&categories[0]?
                    (
                       <div className='d-flex '>
                           <p className='m-0'>All related categories:</p>
                           {categories.map((item)=>{
                               return <Link to={'/products-'+item.toLowerCase()} className='m-0 ml-2'>{item}</Link>
                           })}
                       </div>
                )
                    :null
            }
            </div>
            {
                filter_load?<Filter name={filter_brand} remove={clicked} />:null
            }

            <div className='row pt-3 m-0' >
                <div style={{height:110+'vh',width:15+'%'}}>
                    <h3>Brand</h3>
                    {loaded?item_in_category.map((item)=>{
                        return(
                            <div key={item.brand} className='d-flex align-items-center p-2'>
                                
                                <input type='checkbox'
                                       name={item.brand}
                                       onClick={clicked}
                                       readOnly={true} checked={filter_load} />
                                <p className='m-0 ml-2'>{item.brand}</p>
                            </div>
                        )
                    }):null}
                    {loaded?<ItemFilter props={item_in_category} load={filter_load} remove={clicked}/>:null}
                </div>

                {loaded?item_in_category.map((item)=>{
                    let picture=null
                    try{
                        
                        picture=String(item.pic['pic'])
                    }
                    catch{
                        picture=null
                    }
                    return (
                    <div key={item.id} className='col-lg-3' style={{height:"fit-content"}}>

                        <div className='item-hover p-2' style={{width:"fit-content"}}>
                        <Link  to={'/products-'+slug+'/product_details-'+item.slug} style={{textDecoration:"none"}} className='item-hover'>
                            <div className='text-center'><img src={picture} style={{height:200,width:200}} /></div>
                            <h4 className='m-0 p-2'>{item.name}</h4>
                             {/* <p className='m-0'></p>  */}
                             <p className='m-0 p-2'>Brand: {item.brand}</p>
                            <h3 className='m-0 p-2'>${item.price}</h3>
                            </Link>
                        </div>


                    </div>
                    )
                }):null}
            </div>
        </Nav>
    )
}

const mapStateToProps=state=>{
    return{
        item_in_category:state.ecReducers.items,
        searched_item: state.ecReducers.searched_item

    }
}
export default connect(mapStateToProps,{item_list,get_search})(Items)