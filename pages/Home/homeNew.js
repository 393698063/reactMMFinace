
'use strict';

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';

class HomeNews extends Component {
    static navigationOptions = {
        title: '咨询',
    };
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.topBlock}>
                    <View style={styles.leftCol}>
                        <View style={[styles.cellOne, styles.base]} />
                        <View style={[styles.base, styles.cellTwo]} />
                    </View>
                    <View style={[styles.cellThree, styles.base]}></View>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={[styles.cellFour, styles.base]}></View>
                    <View style={[styles.cellFive, styles.base]}></View>
                    <View style={styles.bottomRight}>
                        <View style={[styles.cellSix, styles.base]} />
                        <View style={[styles.cellSeven, styles.base]} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
    },
    base: {
        borderColor: '#000000',
        borderWidth: 5
    },
    topBlock: {
        flexDirection: 'row',
        flex: 5,
        position:'relative',
    },
    leftCol: {
        flex: 2
    },
    cellOne: {
        flex: 1,
        borderBottomWidth: 15
    },
    cellTwo: {
        flex: 3
    },
    cellThree: {
        backgroundColor: '#FF0000',
        flex: 5
    },
    bottomBlock: {
        flex: 2,
        flexDirection: 'row'
    },
    bottomRight: {
        flexDirection: 'column',
        flex: 2
    },
    cellFour: {
        flex: 3,
        backgroundColor: '#0000FF'
    },
    cellFive: {
        flex: 6
    }, cellSix: {
        flex: 1
    },
    cellSeven: {
        flex: 1,
        backgroundColor: '#FFFF00'
    }
});

export default HomeNews;