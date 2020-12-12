import React from 'react';
import Category from '../category/category';
import Nav from '../nav';

const Home=(props)=>{
    // const [categorydata,setdata]=useState({
    //     loaded:false
    // })
    // const {loaded}=categorydata
    // // const {category,loaded}=categorydata
    // useEffect(()=>{
    //     async function dispatched(){
    //         await category_list()
    //         setdata({
    //             loaded:true
    //         })
    //     }
    //     dispatched()
    //     return ()=>null

    // },[])

    console.log(props)
    return( 
        
        <Nav myprops={props}>
            <h2>
                Categories
            </h2>
            <Category/>
            
        </Nav>
    )
}
export default Home



