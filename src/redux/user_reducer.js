import * as types from './action_types';
import { addUser,getUsers } from './action_creators';

const initialState={
    users:[],
    user:{},        
    loading:true
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users:action.payload
            }
        case types.ADD_USER:
            case types.DELETE_USER:
            case types.UPDATE_USER:
            return {
                ...state
            }
        case types.GET_SINGLE_USER:
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        default: 
            return state
    }
}
export default userReducer;