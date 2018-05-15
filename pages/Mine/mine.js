import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import {
    StackNavigator,
    // TabNavigator,
} from 'react-navigation';

class MineScreen extends Component {
    static navigationOptions = {
        title: '我的',
    };
    _onRecharge(value, e) {
        alert(JSON.stringify(value));
    }
    _onPress(value) {
        alert(JSON.stringify(value));
    }
    _onAbout(value) {
        alert(JSON.stringify(value));
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerView}>
                    <ImageBackground
                        style={styles.iconBack}
                        source={require('../../img/bg_user_head_transport.png')}
                    >
                        <Image style={styles.icon}
                            source={require('../../img/icon_user_head_default.png')}
                        />
                    </ImageBackground>
                    <View style={styles.usinfoView}>
                        <View style={styles.usinfo}>
                            <Text style={styles.nickName}>134******64</Text>
                            <View style={styles.levelView}>
                                <Text style={styles.levelText}>投资等级</Text>
                                <Image
                                    style={styles.levelImg}
                                    source={require('../../img/ic_level_3.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.authView}>
                            <View style={styles.auth}>
                                <Text style={styles.authText}>投资已认证</Text>
                                <Image
                                    style={styles.authImg}
                                    source={require('../../img/icon_certificated.png')}
                                />
                            </View>
                            <View style={styles.auth}>
                                <Text style={styles.authText}>基金已认证</Text>
                                <Image
                                    style={styles.authImg}
                                    source={require('../../img/icon_certificated.png')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.blanceView} >
                    <View style={styles.blance}>
                        <Text style={styles.blanceStatic}
                        >可用余额小计：</Text>
                        <Text
                            style={styles.blanceMoney}
                        >8.92元</Text>
                        <Text
                            style={styles.blanceStatic}
                        >元</Text>
                        <Image
                            style={styles.question}
                            source={require('../../img/icon_help_yelllow_circle.png')}
                        ></Image>
                    </View>
                    <TouchableOpacity
                        onPress={(e) => this._onRecharge('去充值', e)}
                    >
                        <View style={styles.chargeView}>
                            <Text style={styles.chargeText}
                            >去充值</Text>

                            <Image
                                source={require('../../img/icon_next_white.png')}
                                style={styles.chargeImg}
                            ></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '投资账户')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_touzi_account.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >投资账户</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '资金记录')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_capital_flow.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >资金记录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '投资记录')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_investment_note.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >投资记录</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '自动投资')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_auto_invest.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >自动投资</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '我的消息')}>
                        <View >
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_my_message.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >我的消息</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '我的收藏')}>
                        <View >
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_my_favor.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >我的收藏</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '消费账户')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_spending_center.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >消费账户</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '我的保单')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_spending_center.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >我的保单</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentOne}
                        onPress={this._onPress.bind(this, '基金资产')}>
                        <View>
                            <Image
                                style={styles.contentImg}
                                source={require('../../img/icon_my_safe_order.png')}
                            />
                            <Text
                                style={styles.contentText}
                            >基金资产</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.companyDes}>
                    <TouchableOpacity
                        style={styles.desView}
                        onPress={this._onAbout.bind(this, '关于我们')}
                    >
                        <Text style={styles.desTitle}>关于我们</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.desView}
                        onPress={this._onAbout.bind(this, '安全保障')}
                    >
                        <Text style={styles.desTitle}>安全保障</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.desView, styles.desViewLast]}
                        onPress={this._onAbout.bind(this, '资质荣誉')}
                    >
                        <Text style={styles.desTitle}>资质荣誉</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        backgroundColor: '#ff6131',
        height: 90,
        flexDirection: 'row',
    },
    iconBack: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    icon: {
        width: 48,
        height: 48,
    },
    usinfoView: {
        marginTop: 8,
        marginLeft: 15,
    },
    usinfo: {
        flexDirection: 'row'
    },
    nickName: {
        fontSize: 18,
        color: '#fff'
    },
    levelView: {
        flexDirection: 'row',
        backgroundColor: '#EE5527',
        width: 80,
        height: 20,
        marginLeft: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    levelText: {
        fontSize: 10.5,
        color: '#fff',
    },
    levelImg: {
        width: 15,
        height: 15,
    },
    authView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    auth: {
        flexDirection: 'row',
        marginRight: 5
    },
    authText: {
        fontSize: 10.5,
        color: '#fff',
    },
    authImg: {
        width: 11,
        height: 11,
    },
    blanceView: {
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    blance: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },
    blanceStatic: {
        fontSize: 14,
    },
    blanceMoney: {
        fontSize: 14,
        color: '#ff6131',
    },
    question: {
        width: 15,
        height: 15,
        marginLeft: 8
    },
    chargeView: {
        flexDirection: 'row',
        marginRight: 20,
    },
    chargeText: {
        color: '#ff6131',
        fontSize: 14,
    },
    chargeImg: {
        width: 8,
        height: 13,
        marginLeft: 10.5,
    },
    content: {
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentOne: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 100,
    },
    contentImg: {
        width: 40,
        height: 40,
    },
    contentText: {
        fontSize: 13,
        color: '#2B2A2A'
    },
    companyDes: {
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    desView: {
        borderRightColor: '#999',
        borderRightWidth: 0.5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
    },
    desViewLast: {
        borderRightWidth: 0,
    },
    desTitle: {
        fontSize: 14,
        color: '#999',
    },
});

export default MineScreen;