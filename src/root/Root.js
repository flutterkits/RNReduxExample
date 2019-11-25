'use strict'

import React,{Component} from 'react';
import {Provider} from 'react-redux';
import App from './App'
import ConfigueStore from '../store/ConfigueStore';

const store = ConfigueStore();

export default class Root extends Component{
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}