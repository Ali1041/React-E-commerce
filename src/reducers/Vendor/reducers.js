import * as actionTypes from '../../actions/Vendor/action'

const initialState={
    vendor_items:null
};

const vendorReducers=(state=initialState,action)=>{
    const {type,payload}=action
    console.log(type)
    switch (type) {
        case actionTypes.VENDOR_ITEM_LIST_SUCCESS:
            return{
                ...state,
                vendor_items: payload
            }
        default:
            return state

    }
};
export default vendorReducers;