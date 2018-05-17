import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';
import Swiper from 'react-native-swiper';
import { FundItem } from '../Home/home';
class FundScreen extends Component {
    static navigationOptions = {
        title: '基金',
    };
    render() {
        return (
            <View style = {styles.Container}>
                <View style={styles.wrapper}>
                    <Swiper
                    loop = {true}
                    autoplay = {true}
                    >
                        <Image
                            resizeMode='cover'
                            style={styles.slideImg}
                            source={require('../../img/invest_details_bg.png')}
                        />

                        <Image
                            resizeMode='cover'
                            style={styles.slideImg}
                            source={require('../../img/invite_header01.png')}
                        />
                        <Image
                            resizeMode='cover'
                            style={styles.slideImg}
                            source={require('../../img/pro02.png')}
                        />
                    </Swiper>
                </View>
                <View style = {{height:250,marginTop:10,backgroundColor:'#fff'}}>
                <FundItem/>
                </View>
            </View>
        );
    }
}
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const ScreenScale = Dimensions.get('window').scale
const styles = StyleSheet.create({
    wrapper: {
        height: 150,
    },
    slideImg: {
        width: ScreenWidth,
        height: 150,
    },
})

export default FundScreen;