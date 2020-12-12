import React from 'react';
import {get_search} from "../../../actions/EC/actionCreater";
import {connect} from 'react-redux'
const itemFilter=({props,get_search,remove,load})=>{
    let names=[]
    let features=[]
    props.map((name)=>{
        return name.feature.map((single_name)=>{
                    features.push({[single_name.name]:single_name.feature})
                    names.push(single_name.name)

        })
    })

    const uniq=[...new Set(names)]
    console.log(load)
    return(
        <div>
            {
                uniq.map((name)=>{
                    console.log(name)
                    return (<div>
                        <h3>{name}</h3>
                        {features.map((feature)=>{
                            return <div>
                                {feature[name]&&<input type="checkbox"

                                         name={feature[name]} checked={load} onClick={remove}/>}
                            <p> {feature[name]}</p>
                        </div>
                        })}
                    </div>)
                })
            }
            {/*{*/}
            {/*    names.map((name)=>{*/}
            {/*       return (*/}
            {/*           <div>*/}
            {/*            <h3>*/}
            {/*                   {name}*/}
            {/*            </h3>*/}
            {/*               {features.map((feature)=>{*/}
            {/*                   console.log(feature.feature)*/}
            {/*                return <p>{feature.feature}</p>*/}
            {/*            })*/}
            {/*               }*/}
            {/*           </div>*/}
            {/*       )*/}


            {/*    })*/}
            {/*}*/}
        </div>
    )
}
export default connect(null,{get_search})(itemFilter);