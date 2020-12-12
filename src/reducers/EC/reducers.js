import * as actionTypes from '../../actions/EC/action';

const intialState={
    category:'null',
    items:null,
    details:null,
    direct_login:false,
    cart:null,
    searched_item:null,
    searched_value:''
}

const reducer=(state=intialState,action)=>{
    const {type,payload,value}=action
    switch(type){
        case actionTypes.GET_CATEGORY_SUCCESS:
            console.log(payload)
            return{
                ...state,
                category:payload
            }
        case actionTypes.GET_SEARCH_SUCCESS:    
        case actionTypes.GET_ITEM_SUCCESS:
            return{
                ...state,
                items:payload,
                searched_item:payload,
                searched_value:value
            }    
        case actionTypes.GET_DETAILS_SUCCESS:
            return{
                ...state,
                details:payload
            }    
        case actionTypes.ADD_TO_CART_FAIL:
            return{
                ...state,
                direct_login:true
            }    
        case actionTypes.GET_CART_SUCCESS:
            return{
                ...state,
                cart:payload
            }    
        case actionTypes.GET_DETAILS_FAIL:    
        case actionTypes.GET_ITEM_FAIL:    
        case actionTypes.GET_CATEGORY_FAIL:
        case actionTypes.GET_SEARCH_FAIL:    
            return{
                category:null,
                items:null,
                details:null,
            }
        default:    
            return state

    }
}
export default reducer