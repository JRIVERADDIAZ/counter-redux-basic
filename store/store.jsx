import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers/rootReducer';

const composEnahncers = ( typeof  window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose 

export const store = createStore(rootReducer,
    composEnahncers(
    applyMiddleware(thunk)
))