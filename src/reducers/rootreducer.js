import {combineReducers} from 'redux'
import acc_reducer from './account/reducers'
import ec_reducer from './EC/reducers'
import vendor_Reducers from "./Vendor/reducers";
const rootreducer=combineReducers({
    accountReducers:acc_reducer,
    ecReducers:ec_reducer,
    vendorReducer:vendor_Reducers})

export default rootreducer;