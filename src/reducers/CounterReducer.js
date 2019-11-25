'use strict'

import * as types from '../constants/CounterType';

const initState = {
    num: 0
}

export default function CounterReducer(state = initState, action) {
    switch (action.type) {
        case types.COUNTER_ADD:
            return {
                ...state,
                num: action.num
            }
        case types.COUNTER_SUBTRACT:
            return {
                ...state,
                num: action.num
            }
        default:
            return initState;
    }
}