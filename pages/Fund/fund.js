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

class FundScreen extends Component {
    static navigationOptions = {
        title: '基金',
      };
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}>
                基金
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  export default FundScreen;