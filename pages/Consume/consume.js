import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';
import { GoodItem } from '../Home/home'

class ConsumeScreen extends React.PureComponent {
    static navigationOptions = {
        title: '消费',
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [{ type: '新手专享1', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '80', progress: 0.8 },
            { type: '新手专享', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '80', progress: 0.8 }],
            refreshing: false,
        }
    }

    _onPressItem = (item) => {

        console.log(item);

    };
    _onRefresh = () => {
        this.setState({ refreshing: true })
        this.setState((state) => ({
            data: [{ type: '新手专享2', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '30', progress: 0.3 }]
        }));
        setInterval(() => {
            this.setState({ refreshing: false });
        }, 2000)
    }
    _onEndReached = () => {
        setInterval(() => {
            this.setState((state) => ({
                data: state.data.concat({ type: '新手专享1', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '50', progress: 0.5 }
                ),
            }));
        }, 2000)
    }
    _keyExtractor = (item, index) => index.toString();
    _renderItem = ({ item, index }) => {
        //return 和返回值要写到一行，否则返回为空
        return <View style = {{flex:1,height:250,alignItems:'center',justifyContent:'center'}}>
            <GoodItem
                data={item}
                onPressItem={this._onPressItem}
            />
        </View>
    };
    render() {
        return (
            <View style = {styles.container}>
            <FlatList
                data={this.state.data}
                numColumns={2}
                renderItem={this._renderItem}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                onRefresh={this._onRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this._onEndReached}
                onEndReachedThreshold={0.5}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ConsumeScreen;