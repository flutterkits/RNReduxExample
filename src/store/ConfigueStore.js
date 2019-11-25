'use strict'

import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configueStore(initState){
    return createStoreWithMiddleware(rootReducer,initState);
}