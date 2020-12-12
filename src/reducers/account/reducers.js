import * as actiontype from '../../actions/account/actions'

const initialState={
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAutheticated:false,
    user:null
}
const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case actiontype.SIGNUP_SUCCESS:
            return{
                isAuthenticated:false,
            }
        case actiontype.REFRESH_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case actiontype.LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access)
            return{
                access:payload.access,
                refresh:payload.refresh,
                isAuthenticated:true,
            }

        case actiontype.VERIFY_SUCCESS:
            return{
                ...state,
                isAuthenticated:true
            }
        case actiontype.USER_LOADED_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case actiontype.REFRESH_LOGIN_FAIL:
        case actiontype.LOGOUT_SUCCESS:
        case actiontype.LOGIN_FAIL:    
        case actiontype.USER_LOADED_FAIL:    
        case actiontype.VERIFY_FAIL:        
        case actiontype.SIGNUP_FAIL:
            return{
                access:null,
                refresh:null,
                isAutheticated:false,
                user:null

            }    
        default:
            return state    
    }
}

export default reducer;



