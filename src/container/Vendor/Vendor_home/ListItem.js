import React from 'react';

const ListItem=({list,classname})=>{
    return (
        <div className={classname}  >
            <img src={list.pic['pic']} style={{width:100+'%',height:150}} alt="pic"/>
            <p>{list.name}</p>
            <p>Price: {list.price}</p>
            <p>Brand: {list.brand}</p>
        </div>
    )
}
export default ListItem;