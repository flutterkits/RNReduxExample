'use strict'
import React from 'react';
import CounterPage from '../pages/CounterPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator({
    CounterPage: { screen: CounterPage }
});
export default createAppContainer(App);