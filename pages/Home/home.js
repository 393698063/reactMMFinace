import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';
import MyBackButton from '../../router/backButton'
class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: <Image
            source={require('../../img/icon_home_title.png')}
            style={{ width: 83.4, height: 25 }}
        />,
        headerLeft: <Image
            source={require('../../img/icon_user_head_default.png')}
            style={{ width: 30, height: 30, left: 20 }}
        />,
    };
    //初始化
    constructor(props) {
        super(props);
    }
    //组件将要渲染
    componentWillMount() {
        console.log('----将要渲染home')
    }
    componentDidMount() {
        //在render之后
        console.log('----已经渲染home')
    }
    componentWillReceiveProps(nextProps) {
        console.log('---将要接受props')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('---将要更新')
    }

    componentDidUpdate(prevProps, prevState) {
        //在render之后
        console.log('---已经更新')
    }
    //组件DOM中移除的时候调用 销毁
    componentWillUnmount() {
        console.log('----销毁')
    }


    render() {
        var icon = this.props.theme == 'white' ? require('../../img/ic_back_black.png') : require('../../img/ic_back.png');
        return (
            <View style={styles.container} >
                <View style={styles.nologinContainer}>
                    <ImageBackground
                        source={require('../../img/bg_home_unlogin.png')}
                        style={styles.noLoginBack}>
                        <Image source={require('../../img/icon_user_head_default.png')}
                            style={styles.userIcon} />
                        <Button title='登录注册' style={styles.loginButton}
                            onPress={() => {
                                console.log('到咨询');
                                this.props.navigation.navigate('homeNews');
                            }}></Button>
                    </ImageBackground>
                </View>
                <Button title='登录注册' style={styles.loginButton}
                onPress={() => { 
                    this.props.navigation.navigate('homeNews') }
                    }>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleImage: {
        width: 41.7,
        height: 12.5,
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    nologinContainer: {
        height: 161,
    },
    noLoginBack: {
        flex: 1,
        height: 161,
        alignItems: 'center',
    },
    userIcon: {
        width: 50,
        height: 50,
        top: 26,
    },
    loginButton: {
        width: 150,
        height: 40,
        top: 101,
        backgroundColor: '#FF6131',
    },
});

export default HomeScreen;