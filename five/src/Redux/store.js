import {createStore,applyMiddleware} from 'redux'
import {UserReducer} from './User/User.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let store =createStore(UserReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export {store}