'use strict'

import {
    View, Text, TouchableOpacity,StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterAction from '../actions/CounterAction';

class CounterPage extends Component {
    render() {
        const { num, add, subtract } = this.props;
        return (
            <View style={{alignItems:'center'}}>
                <Text style={styles.bodyText}>{num}</Text>
                <TouchableOpacity onPress={() => add(num)}>
                    <Text style={styles.bodyText}>clickme 加1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => subtract(num)}>
                    <Text style={styles.bodyText}>clickme 减1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyText:{
        fontSize:30,marginTop:20,backgroundColor:'#dddddd'
    }
})
export default connect(
    store => ({
        num: store.CounterReducer.num,
    }),
    dispatch => ({
        add: (num) => dispatch(counterAction.add(num)),
        subtract: (num) => dispatch(counterAction.subtract(num)),
    })
)(CounterPage)