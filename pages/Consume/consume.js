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

class ConsumeScreen extends Component {
    static navigationOptions = {
        title: '消费',
      };
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}>
                消费
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

  export default ConsumeScreen;