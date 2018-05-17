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
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ProgressView from '../component/progress';
export default class InvestItem extends Component {

    //初始化
    constructor(props) {
        super(props);
        console.log('investLabels-------');
        // console.log(this.props.data);
    }

    _onPressItem() {
        console.log('点击投资');
        console.log(this.props.onPressItem);
        this.props.onPressItem(this.props.data);
    }

    render() {
        var labels = null;
        if (this.props.data.labels) {
            labels = this.props.data.labels.map((title, index) =>
                <Text key={index} style={styles.investLabels}>{title}</Text>
            )
        }
        return (
            <TouchableOpacity
                onPress = {() => this._onPressItem()}
            >
                <View style={{
                    height: 170, borderTopColor: '#ebeef3',
                    marginLeft: 20, marginRight: 20,
                    borderTopWidth: 0.5,
                }}>
                    <View style={styles.investTitleView}>
                        <View style={styles.investTypeLabelBack}>
                            <Text style={styles.investTypeLabel}>{this.props.data.type ? this.props.data.type : '新手专享'}</Text>
                        </View>
                        <Text style={styles.investTitle}>{this.props.data.investTitle ? this.props.data.investTitle : '美美稳赢30天1705025'}</Text>
                    </View>
                    <View style={styles.investContent}>
                        <View style={styles.investContentRadio}>
                            <View style={styles.investDesView}>
                                <Text style={styles.investRadio}>{this.props.data.radio ? this.props.data.radio : '12.0'}</Text>
                                <Text style={styles.investUnit}>%</Text>
                            </View>
                            <Text style={styles.investDes}>预期年化收益率</Text>
                        </View>
                        <View style={styles.investContentDate}>
                            <View style={styles.investDesView}>
                                <Text style={styles.investDate}>{this.props.data.date ? this.props.data.date : '30'}</Text>
                                <Text style={styles.investUnit}>天</Text>
                            </View>
                            <Text style={styles.investDes}>投资期限</Text>
                        </View>
                        <View style={styles.investContentProgress}>
                            <ProgressView style={{ flex: 1 }}
                                progress={this.props.data.progress}
                                ProgressString={this.props.data.progressString}
                            />
                        </View>
                    </View>
                    <View style={styles.investLabelsView}>
                        {
                            labels
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

InvestItem.propTypes = {
    onPressItem: PropTypes.func,
    data: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    investTitleView: {
        flexDirection: 'row',
        marginTop: 21,
    },
    investTypeLabelBack: {
        width: 60,
        height: 21,
        backgroundColor: '#81C053',
        borderRadius: 12.5,
    },//Text添加圆角不起作用
    investTypeLabel: {
        fontSize: 12,
        color: '#fff',
        width: 60,
        height: 21,
        textAlign: 'center',
        lineHeight: 21,
    },
    investTitle: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
        fontFamily: 'PingFangSC-Light',
    },
    investContent: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    investContentRadio: {
        marginTop: 7,
    },
    investDesView: {
        flexDirection: 'row',
        height: 33,
        alignItems: 'flex-end',
    },
    investRadio: {
        fontFamily: 'PingFangSC-Medium',
        color: '#FF6131',
        fontSize: 24,
    },
    investUnit: {
        fontSize: 15,
        fontFamily: 'PingFangSC-Light',
        alignSelf: 'flex-end',
        bottom: 2,
    },
    investDes: {
        fontSize: 12,
        fontFamily: 'PingFangSC-Light',
        color: '#999',
    },
    investContentDate: {
        marginTop: 7,
    },
    investDate: {
        color: '#333',
        fontSize: 24,
        fontFamily: 'PingFangSC-Medium',
    },
    investContentProgress: {
        width: 66,
        height: 66,
    },
    investLabelsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12,
    },
    investLabels: {
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 11,
        color: '#AE8F6B',
        borderColor: '#AE8F6B',
        borderWidth: 0.5,
        borderRadius: 4,
        height: 15,
        lineHeight: 15,
        marginRight: 15,
    },
});