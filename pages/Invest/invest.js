import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  StackNavigator,
  // TabNavigator,
} from 'react-navigation';
import InvestItem from '../Home/InvestItem';

// class MyListItem extends React.PureComponent {
//   _onPress = () => {
//     this.props.onPressItem(this.props.item);
//   };

//   render() {
//     const textColor = this.props.selected ? "red" : "black";
//     return (
//       <TouchableOpacity onPress={this._onPress.bind(this)}>
//         <View style={{
//           height: 30, backgroundColor: '#666',
//           borderBottomColor: '#eefefb',
//           borderBottomWidth: 1
//         }}>
//           <Text style={{ color: textColor }}>
//             {this.props.title}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

class InvestScreen extends React.PureComponent {
  static navigationOptions = {
    title: '投资',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [{ type: '新手专享1', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '80',progress: 0.8 },
      { type: '新手专享', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '80',progress: 0.8 }],
      refreshing: false,
    }
  }

  _onPressItem = (item) => {

    console.log(item);

  };
  _onRefresh = () => {
    this.setState({refreshing: true})
    this.setState((state) => ({
      data: [{ type: '新手专享2', radio: '12.0', date: '30', labels: ['111111', '22222'],  progressString: '30',progress: 0.3 }]
    }));
    setInterval(() => {
      this.setState({refreshing: false});
    },2000)
  }
  _onEndReached = () => {
    this.setState((state) => ({
      data: state.data.concat({ type: '新手专享1', radio: '12.0', date: '30', labels: ['111111', '22222'], progressString: '50',progress: 0.5 }
    ),
    }));
  }
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({ item, index }) => {

    return <View style={styles.container}>
      <InvestItem
        data={item}
        onPressItem={this._onPressItem}
      />
    </View>
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
        onEndReached = {this._onEndReached}
        onEndReachedThreshold = {0.5}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default InvestScreen;