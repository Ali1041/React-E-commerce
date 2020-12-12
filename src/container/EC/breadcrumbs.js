import {Breadcrumbs} from 'react-breadcrumbs'   
import React from 'react';
import {Link,withRouter} from 'react-router-dom'

const breadCrumbs=(props)=>{
    const {history,location:{pathname}}=props
    const x=pathname.split('/')
    x.shift()
    return(
        <Breadcrumbs className=' p-2 d-flex border-bottom'>
            <Link to='/' style={{fontSize:25,fontWeight:"lighter",textDecoration:"none"}}>Home</Link>
            {
                x.map((item)=>{
                    let value=''
                    if(item!==""){
                        value=item.split('-')
                    }
                    value=value[1]
                    return(
                        <div className='d-flex' key={item}>
                            <p className='m-0 p-2' style={{width:"fit-content",height:"fit-content"}}>{'>'}</p>
                            <Link
                         to={'/'+item}
                          className='ml-2 text-center' 
                          style={{fontSize:25,fontWeight:"lighter",textDecoration:"none"}}>

                            {value}</Link>
                        </div>

                    )
                })
            }
           
        </Breadcrumbs>
    )
}
export default withRouter(breadCrumbs)