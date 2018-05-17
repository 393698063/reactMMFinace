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
    Dimensions,
} from 'react-native';
import MyBackButton from '../../router/backButton';
import PropTypes from 'prop-types';
import InvestItem from './InvestItem';
import { hidden } from 'ansi-colors';
class LoginButton extends Component {

    render() {
        return (
            <TouchableHighlight
                onPress={
                    () => {
                        this.props.onClick()
                    }
                }
                underlayColor={'rgba(255,255,255,0.0)'}
            >
                <View style={[styles.defaultLoginButton, this.props.innerStyle]}>
                    <Text style={[this.props.titleStyle]}
                    >{this.props.title}</Text>

                </View>
            </TouchableHighlight>
        )
    }
}
LoginButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

class InfoItem extends Component {

    render() {
        return (
            <View style={styles.Info}>
                <View style={styles.InfoImageView}>
                    <Image
                        style={styles.InfoImageViewImg}
                        source={require('../../img/giftBagshareBigPacket.png')}
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

class ItemBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children;
        return (
            <View style={[styles.itemContainer, this.props.height]}>
                <View style={[styles.itemContainerHeadImgView, this.props.marginBottom]}>
                    <Image
                        style={styles.itemContainerHeadImg}
                        //此处有坑 原想传图片的地址过来，结果不行
                        //错误写法
                        //source={this.props.headImage? require（this.props.headImage） : require('../../img/homeNewInfo.png')}
                        source={this.props.headImage ? this.props.headImage : require('../../img/homeNewInfo.png')}
                    />
                </View>
                {children}
                <View style={[styles.itemContainerinfoFoot, this.props.footStyle]}>
                    <Text style={styles.itemContainerinfoFootText}>{this.props.footText ? this.props.footText : '更多精彩资讯'}</Text>
                    <Image
                        style={styles.itemContainerinfoFootImg}
                        source={require('../../img/btn_home_more.png')}
                    />
                </View>
            </View>
        )
    }
}
ItemBox.propTypes = {
    children: PropTypes.element.isRequired,
    footText: PropTypes.string,
    footImg: PropTypes.string,
}
//类名要大写
export class GoodItem extends Component {
    render() {
        return (
            <View style={styles.goodContainer}>
                <Image style={styles.goodImg}
                    source={this.props.goodImg ? this.props.goodImg : require('../../img/giftBagshareBigPacket.png')}
                />
                <Text style={styles.goodDes}>{this.props.goodDes ? this.props.goodDes : '最新打造美的超级全能随心面包机迷你型'}</Text>
                <View style={styles.goodPriceContainer}>
                    <Text style={styles.newGoodPrice}>¥{this.props.ngoodPrice ? this.props.ngoodPrice : '18000'}</Text>
                    <Text style={[styles.newGoodPrice, styles.oldGoodPrice]}>¥{this.props.ogoodPrice ? this.props.ogoodPrice : '18000'}</Text>
                </View>
            </View>
        )
    }
}


export class FundItem extends Component {
    _onClick() {
        alert('基金')
    }
    render() {
        return (
            <View style={styles.fundWrap}>
                <Text style={styles.fundTitle}>南方天天利A</Text>
                <View style={styles.fundRadioView}>
                    <Text style={styles.fundRadio}>4.33340</Text>
                    <Text style={styles.fundRadioSymbol}>%</Text>
                </View>
                <Text style={styles.fundRecent}>近7日年化</Text>
                <View style={styles.fundContent}>
                    <View style={styles.fundStart}>
                        <Text style={styles.fundType}>起投金额：</Text>
                        <Text style={styles.fundStartMoney}>0元</Text>
                    </View>
                    <View style={styles.fundTypeView}>
                        <Text style={styles.fundType}>基金类型:</Text>
                        <Text style={styles.fundTypeText}>货币型</Text>
                    </View>
                </View>
                <LoginButton
                    onClick={this._onClick}
                    innerStyle={styles.fundBuyButton}
                    titleStyle = {{color:'#fff', fontSize:16,}}
                    title='立即购买'
                />
            </View>
        )
    }
}

// module.exports = InvestItem

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

    _onPressInvest(v){
        console.log('-----' +v);
        alert(JSON.stringify(v));
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
                <ItemBox
                    headImage={require('../../img/homeInvestment.png')}
                    height={{ height: 630 }}
                    marginBottom={{ marginBottom: 0 }}
                    footText='更多安心投资'
                >
                    <View style={{ flex: 1 }}>
                        {
                            [1, 2, 3].map((index) =>
                                <InvestItem
                                    onPressItem = {(v) => this._onPressInvest(v)}
                                    key={index.toString()}
                                    data={{ type: '新手专享', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: (index * 10).toString(), progress: index / 10 }}
                                />
                            )
                        }
                    </View>
                </ItemBox>
                <ItemBox
                    headImage={require('../../img/homeHotFundTitle.png')}
                    height={{ height: 320 }}
                    marginBottom={{ marginBottom: 0 }}
                    footStyle={{ height: 0 ,overflow:'hidden'}}
                >
                    <FundItem />
                </ItemBox>
                <ItemBox
                    headImage={require('../../img/homeHotconsume.png')}
                    height={{ height: 630 }}
                    footText='更多精选商品'
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginLeft: 20, marginRight: 20
                    }
                    }>
                        <GoodItem />
                        <GoodItem />
                        <GoodItem />
                        <GoodItem />
                    </View>
                </ItemBox>
                {/* //两种实现吧，这个写了个组件，下一个单独写的 */}
                {/* 咨询 */}
                <ItemBox
                    headImage={require('../../img/homeNewInfo.png')}
                    height={{ height: 357 }}
                >
                    <View >
                        <InfoItem />
                        <InfoItem />
                        <InfoItem />
                    </View>
                </ItemBox>
                <View style={styles.itemContainer}>
                    <View style={styles.itemContainerHeadImgView}>
                        <Image
                            style={styles.itemContainerHeadImg}
                            source={require('../../img/homeNewInfo.png')}
                        />
                    </View>
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                    <View style={styles.itemContainerinfoFoot}>
                        <Text style={styles.itemContainerinfoFootText}>更多精彩资讯</Text>
                        <Image
                            style={styles.itemContainerinfoFootImg}
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
    itemContainer: {
        marginTop: 10,
        flex: 1,
        height: 357,
        backgroundColor: '#fff',
    },
    itemContainerHeadImgView: {
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    itemContainerHeadImg: {
        height: 20,
        width: 331,
    },
    itemContainerinfoFoot: {
        borderColor: '#EBEEF3',
        borderTopWidth: 0.5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainerinfoFootText: {
        fontSize: 14,
        color: '#999',
    },
    itemContainerinfoFootImg: {
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
    InfoImageViewImg: {
        width: 95,
        height: 55,
        marginLeft: 20,
    },
    InfoContent: {
        flex: 1,
    },
    infoTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: '#666',
    },
    infoState: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
    },
    infoContentImg: {
        width: 12,
        height: 8.5,
    },
    infoContentImgLst: {
        marginLeft: 24.5,
    },
    infoContentText: {
        fontSize: 10,
        color: '#999',
    },
    goodContainer: {
        width: 158,
        height: 250,
    },
    goodImg: {
        width: 158,
        height: 158,
        marginBottom: 10,
        borderRadius: 4,
    },
    goodDes: {
        fontSize: 12,
        color: '#333',
        marginBottom: 6,
    },
    goodPriceContainer: {
        flexDirection: 'row',
    },
    newGoodPrice: {
        color: '#13A5B5',
        fontSize: 12,
    },
    oldGoodPrice: {
        color: '#BEBEBE',
        marginLeft: 6,
    },
    fundWrap: {
        borderColor: '#EBEEF3',
        borderTopWidth: 0.5,
        flex: 1,
        alignItems: 'center',
    },
    fundTitle: {
        fontSize: 18,
        color: '#333',
        marginTop: 19,
    },
    fundRadioView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 14,
    },
    fundRadio: {
        color: '#ff6131',
        fontSize: 24,
    },
    fundRadioSymbol: {
        fontSize: 15,
        color: '#ff6131',
    },
    fundRecent: {
        marginTop: 14,
        color: '#999',
        fontSize: 12
    },
    fundContent: {
        width:Dimensions.get('window').width,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent:'space-around',
    },
    fundStart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fundTypeView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fundType:{
        fontSize:14,
        color:'#333',
    },
    fundStartMoney:{
        fontSize:14,
        color:'#333',
    },
    fundTypeText:{
        fontSize:14,
        color:'#333',
    },
    fundBuyButton:{
        marginTop:20,
        width:275,
        height:40,
    },
});

export default HomeScreen;