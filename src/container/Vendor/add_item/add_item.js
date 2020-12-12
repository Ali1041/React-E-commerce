import React,{useState,useEffect} from 'react';
import Feature from "./feature";
import {connect} from 'react-redux';
import {add_item} from '../../../actions/Vendor/actionCreater'

const Addition=({history,add_item})=>{
    const [data,setdata]=useState({
        Name:'',
        Description:'',
        Price:0,
        Promotion:'',
        features:[],
        loaded_check:true,
        loaded_check2:true,
        pictures:[]

    })
    const {Name,Description,Price,Promotion,Cash_on_delivery,
        Online_payment,features,loaded_check,loaded_check2,pictures}=data

    const clicked=(e)=>{
        e.preventDefault()
        if(e.target.name==='feature') {
            setdata({
                ...data,
                [features]: features.push({"name": "", "feature": ""})
            })
        }
        else {
            setdata({
                ...data,
                [pictures]:pictures.push(1)
        })
        }
    }
    // const img_add=(e)=>{
    //     e.preventDefault()
    //
    //
    // }
    const removed=(e,index)=>{
        e.preventDefault();
        // removing(features,index)
        if(e.target.name==='feature_remove') {
            let first = [...features]
            first.splice(index, 1)
            setdata({
                ...data,
                features: first
            })
        }
        else{
            let first = [...pictures]
            console.log(first)
            first.splice(index, 1)
            setdata({
                ...data,
                pictures: first
            })
        }
        }

    // const removing=(f,index)=>{
    //     if(f!==null) {
    //         let first = [...f]
    //         first.splice(index, 1)
    //         setdata({
    //             ...data,
    //             features: first
    //         })
    //     }
    // }

    const changing=(e,n,f,ind)=> {
        e.preventDefault()
        if (n === undefined && f === undefined) {
            setdata({
                ...data,
                [e.target.name]:e.target.value,
            })
 
            }
        else {
            let first=[...features]
            // console.log(first)
            const second={...first[ind]}
            second.name=n
            second.feature=f
            // console.log(second)
            first[ind]=second
            setdata({
                    ...data,
                    features:first

                }

            )
            // console.log(first)

        }


    }
    const checkbox_input=(e)=>{
        if(e.target.name==='Cash_on_delivery')
        setdata({
            ...data,
            [e.target.name]: loaded_check,
            loaded_check: !loaded_check

        })
        else{
            setdata({
            ...data,
            [e.target.name]: loaded_check2,
            loaded_check2: !loaded_check2

        })
        }
    }
    const imghandler=(e,ind)=>{
        e.preventDefault()
        console.log(e.target.previousSibling.files)
        let arr=[...pictures]
        // arr.push(e.target.files[0].name)
        arr.splice(ind,1,e.target.previousSibling.files[0].name)
        console.log(arr,pictures)
        setdata({
            ...data,
            pictures:arr
        })
    }

    const validateAndAdd=(e)=>{
        e.preventDefault();
        add_item(Name,Description,Price,Promotion,features,Cash_on_delivery,Online_payment)
    }

    console.log(pictures)
    return (
        <div className='container mt-5' style={{width:60+'%'}}>
            <button className='btn btn-secondary mb-2' onClick={history.goBack}>Back</button>
        <form className=' border rounded  p-3'  >
            <legend className='text-center' >Add item</legend>
            <label htmlFor="">Name</label>
            <input type="text" onChange={changing} name={'Name'}
                   className='form-control'
                   placeholder={'Name'}/>

            <label htmlFor="">Description</label>
            <textarea className='form-control' onChange={changing} name={'Description'}
                      placeholder={'Description'}/>

            <label htmlFor="">Price</label>
            <input type="number" onChange={changing} name={'Price'}
                   placeholder={'Price'}
                   className='form-control'/>

            <label htmlFor="">Promotion</label>
            <input type="text" name={'Promotion'} onChange={changing}
                   placeholder={'Promotion'}
                   className='form-control'/>


            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={changing}
                    className='form-control'>
                <option value="One">One</option>
                <option value="Two">Electronics</option>
            </select>

            <div className='mb-3'>
                <h2>Add features</h2>
                {features.map((i,ind)=> {
                    console.log(i,ind)
                    return (
                        <Feature  index={ind} feature_name={i.name} feature_value={i.feature}
                                  clickConfirm={(e,n,f)=>changing(e,n,f,ind)}
                                 key={ind} remove={(e,index)=>removed(e,index)} />
                    )
                })}
                <button style={{border:"none",outline:"none"}} name='feature'
                        className='text-primary bg-white' onClick={clicked} >+Add </button>
            </div>
            <div>
                <h2>Add Images</h2>
                {pictures.map((pic,ind)=>{
                    console.log(pic)
                    return <div>
                        <input type="file"
                             />
                               <button
                                   onClick={(e,ind)=>imghandler(e,ind)}>
                                   &#9989;</button>
                        <button className='btn btn-danger' name='img_remove'
                                onClick={removed}>X</button>
                    </div>
                })}
                <button style={{border:"none",outline:"none"}} name='img'
                        className='text-primary bg-white'
                    onClick={clicked} >+Add </button>

            </div>

            <label htmlFor="cod" className='d-block mt-3'>
                <input  name={'Cash_on_delivery'} id='cod'
                type="checkbox" checked={loaded_check} onChange={checkbox_input}/>
                Cash on Delivery
            </label>

            <label htmlFor="">
                <input onChange={checkbox_input} name={'Online_payment'}
                    type="checkbox" checked={loaded_check2} />
                    Online payment
            </label>

            <button className='btn btn-primary d-block'
                    style={{width:100+'%'}}
                    onClick={validateAndAdd}>Create</button>
        </form>
            </div>
    )
}
export default connect(null,{add_item})(Addition);