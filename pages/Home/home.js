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
    ScrollView,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';
import MyBackButton from '../../router/backButton';
import PropTypes from 'prop-types';

class LoginButton extends Component {

    render() {
        return (
            <View style={[styles.defaultLoginButton, this.props.innerStyle]}>
                <TouchableHighlight
                    onPress={
                        () => {
                            this.props.onClick()
                        }
                    }
                >
                    <Text style={[this.props.titleStyle]}
                    >{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class InfoItem extends Component {

    render() {
        return (
            <View style={styles.Info}>
                <View style={styles.InfoImageView}>
                    <Image
                        style={styles.InfoImageViewImg}
                        source={require('../../img/icon_home_autoInvest.png')}
                    />
                </View>
                <View style={styles.InfoContent}>
                    <Text style={styles.infoTitle}>新型产品投资理念，组合拳出击</Text>
                    <View style={styles.infoState}>
                        <Image source={require('../../img/infoFindRead.png')}
                            style={styles.infoContentImg} />
                        <Text style={styles.infoContentText}>28</Text>
                        <Image source={require('../../img/infoComment.png')}
                            style={[styles.infoContentImg, styles.infoContentImgLst]} />
                        <Text style={styles.infoContentText}>28</Text>
                        <Image source={require('../../img/infoSupport.png')}
                            style={[styles.infoContentImg, styles.infoContentImgLst]} />
                        <Text style={styles.infoContentText}>30</Text>
                    </View>
                </View>
            </View>
        )
    }
}


LoginButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

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
        console.log('constructor----初始化')
    }
    //组件将要渲染
    componentWillMount() {
        console.log('componentWillMount----将要渲染home')
    }
    componentDidMount() {
        //在render之后
        console.log('componentDidMount----已经渲染home')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps---将要接受props')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate---将要更新')
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
            <ScrollView style={styles.container} >
                <View style={styles.nologinContainer}>
                    <ImageBackground
                        source={require('../../img/bg_home_unlogin.png')}
                        style={styles.noLoginBack}>
                        <Image source={require('../../img/home_noLogin_head.png')}
                            style={styles.userIcon} />
                        <LoginButton title='登录注册'
                            innerStyle={styles.loginButton}
                            titleStyle={{ color: '#fff', fontSize: 16 }}
                            onClick={() => {
                                console.log('到咨询');
                                this.props.navigation.navigate('homeNews');
                            }}></LoginButton>
                    </ImageBackground>
                </View>
                <View style={styles.fastContainer}>
                    <TouchableHighlight>
                        <View style={styles.fastModel}>
                            <Image
                                style={styles.modelImage}
                                source={require('../../img/icon_home_fastCharge.png')}
                            />
                            <Text
                                style={styles.modelText}
                            >快捷充值</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.fastModel}>
                            <Image
                                style={styles.modelImage}
                                source={require('../../img/icon_home_autoInvest.png')}
                            />
                            <Text
                                style={styles.modelText}
                            >自动投资</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.fastModel}>
                            <Image
                                style={styles.modelImage}
                                source={require('../../img/icon_home_invite.png')}
                            />
                            <Text
                                style={styles.modelText}
                            >邀请好友</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.fastModel}>
                            <Image
                                style={styles.modelImage}
                                source={require('../../img/icon_home_qualityInfo.png')}
                            />
                            <Text
                                style={styles.modelText}
                            >精品资讯</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoHead}>
                        <Image
                            style={styles.infoHeadImg}
                            source={require('../../img/homeNewInfo.png')}
                        />
                    </View>
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                    <View style={styles.infoFoot}>
                        <Text style={styles.infoFootText}>更多精彩资讯</Text>
                        <Image
                            style={styles.infoFootImg}
                            source={require('../../img/btn_home_more.png')}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    defaultLoginButton: {
        backgroundColor: '#FF6131',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleImage: {
        width: 41.7,
        height: 12.5,
    },
    container: {
        flex: 1,
        backgroundColor: '#ebeef3',
        // overflow:'scroll',
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
        marginTop: 26,
    },
    loginButton: {
        width: 150,
        height: 40,
        marginTop: 25,
        backgroundColor: '#FF6131',
    },
    fastContainer: {
        backgroundColor: '#fff',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fastModel: {
        alignItems: 'center',
    },
    modelImage: {
        width: 42,
        height: 42,
        marginBottom: 6,
    },
    modelText: {
        fontSize: 14,
        color: '#666',
    },
    infoContainer: {
        marginTop: 10,
        flex: 1,
        height: 357,
        backgroundColor: '#fff',
    },
    infoHead: {
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:12,
    },
    infoHeadImg: {
        height: 20,
        width: 331,
    },
    infoFoot: {
        borderColor:'#EBEEF3',
        borderTopWidth:0.5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoFootText: {
        fontSize: 14,
        color: '#999',
    },
    infoFootImg: {
        width: 11.5,
        height: 11.5,
        marginLeft: 1,
    },
    Info: {
        flexDirection: 'row',
        height: 75,
    },
    InfoImageView: {
        width: 115,
    },
    InfoImageViewImg:{
        width:95,
        height:55,
        marginLeft:20,
    },
    InfoContent: {
        flex: 1,
    },
    infoTitle: {
        marginLeft:10,
        fontSize:15,
        color:'#666',
    },
    infoState: {
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        alignItems:'center',
    },
    infoContentImg: {
        width:12,
        height:8.5,
    },
    infoContentImgLst:{
        marginLeft:24.5,
    },
    infoContentText: {
        fontSize:10,
        color:'#999',
    },
});

export default HomeScreen;