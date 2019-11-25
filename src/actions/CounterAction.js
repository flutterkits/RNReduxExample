'use strict'

import * as types from '../constants/CounterType';

export function add(value){
    const resultValue = value+1;
    return dispatch=>{
        dispatch(result(types.COUNTER_ADD,resultValue));
    }
}

export function subtract(value){
    const resultValue = value-1;
    return dispatch=>{
        dispatch(result(types.COUNTER_SUBTRACT,resultValue));
    }
}

function result(type,value){
    return {
        type:type,
        num:value
    }
}