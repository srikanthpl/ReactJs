import {USER_FAILURE,USER_SUCCESS,USER_REQ} from './User.action'

let UserReducer=(state={},action)=>{

    switch(action.type){
        case USER_REQ:
            return { }
        case USER_SUCCESS:
            return {user: action.payload}
        case USER_FAILURE:
            return {}
        default:
                return state
    }
}

export {UserReducer}