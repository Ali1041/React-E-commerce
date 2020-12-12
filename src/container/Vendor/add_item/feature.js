import React from 'react';

const Feature=({onchange,remove,index,clickConfirm,feature_name,feature_value})=>{
    // console.log(feature_name,feature_value)
    // if(feature_value===undefined||feature_name===undefined){
    //     feature_name=feature_value=''
    // }
    return (
        <div className='mb-3'>
            <label htmlFor="">Name</label>
            <input type="text"
                   onChange={(e)=> {
                       clickConfirm(e,e.target.value,e.target.nextSibling.nextSibling.value)
                   }
                }


                   className='form-control'
                   value={ feature_name}
                    name={'name'}/>

            <label htmlFor="">Feature</label>
            <input type="text" className='form-control'
                  onChange={(e)=> {
                       clickConfirm(e,e.target.previousSibling.previousSibling.value,e.target.value)
                   }
                }




                   value={feature_value}
                    name={'feature'}/>
            {/*<button className='btn btn-success'*/}
            {/*    onClick={(e)=>*/}
            {/*        clickConfirm(e,e.target.previousSibling,*/}
            {/*            e.target.previousSibling.previousSibling.previousSibling)*/}
            {/*    } >*/}
            {/*    Confirm</button>*/}
            <button className='btn btn-danger' name='feature_remove'
                    onClick={(e)=>remove(e,index)} >
                Remove</button>
        </div>
    )
}
export default Feature;