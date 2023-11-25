import {GM,GN} from './message.action'

let initialstate={
    msg:"hello..."
}
let messageReducer=(state=initialstate,action)=>{


    switch(action.type){
        case GM:
            return {msg:"Good Morning"}
        case GN:
            return {msg:"Good Night"}
        
        default:
            return state
    }
    

}

export default messageReducer