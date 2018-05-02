/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabBarItem from './tabbarItem';
import homeScreen from '../pages/Home/home';
import investScreen from '../pages/Invest/invest';
import fundScreen from '../pages/Fund/fund';
import consumeScreen from '../pages/Consume/consume';
import mineScreen from '../pages/Mine/mine'



export default TabNavigator({
  homeScreen: {
    screen: homeScreen,
    path: 'main/home/:name',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../img/ic_home_tab_normal.png')}
          selectedImage={require('../img/ic_home_tab_selected.png')}
        />
      )
    }),
  },
  investScreen: {
    screen: investScreen,
    path: 'main/invest/:name',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '投资',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../img/ic_investment_tab_normal.png')}
          selectedImage={require('../img/ic_investment_tab_selected.png')}
        />
      )
    }),
  },
  fundScreen: {
    screen: fundScreen,
    path: 'main/fund/:name',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '基金',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../img/ic_fund_tab_normal.png')}
          selectedImage={require('../img/ic_fund_tab_selected.png')}
        />
      )
    }),
  },
  consumeScreen: {
    screen: consumeScreen,
    path: 'main/consume/:name',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '消费',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../img/ic_consume_tab_normal.png')}
          selectedImage={require('../img/ic_consume_tab_selected.png')}
        />
      )
    }),
  },
  mineScreen: {
    screen: mineScreen,
    path: 'main/mine/:name',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../img/ic_account_tab_normal.png')}
          selectedImage={require('../img/ic_account_tab_selected.png')}
        />
      )
    }),
  },
},
  {
    // tabBarComponent: TabBarBottom, //Component to use as the tab bar, e.g. TabBarBottom (this is the default on iOS), TabBarTop (this is the default on Android).
    tabBarPosition: 'bottom', //Position of the tab bar, can be 'top' or 'bottom'
    swipeEnabled: false, //Whether to allow swiping between tabs
    animationEnabled: false, //Whether to animate when changing tabs
    removeClippedSubviews: true, //Defaults to true. An optimization to reduce memory usage by freeing resources used by inactive tabs
    lazy: true, //Defaults to true. If false, all tabs are rendered immediately. When true, tabs are rendered only when they are made active
    //configureTransition - a function that, given currentTransitionProps and nextTransitionProps, returns a configuration object that describes the animation between tabs.
    tabBarOptions: { // Configure the tab bar, see below
      // initialRouteName - The routeName for the initial tab route when first loading
      //order - Array of routeNames which defines the order of the tabs.
      //paths - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs.
      // backBehavior - Should the back button cause a tab switch to the initial tab? If yes, set to initialRoute, otherwise none. Defaults to initialRoute behavior.
      activeTintColor: '#FF6131', //Label and icon color of the active tab
      inactiveTintColor: '#666666', //Label and icon color of the inactive tab
      // activeBackgroundColor - Background color of the active tab
      // inactiveBackgroundColor - Background color of the inactive tab.
      style: { backgroundColor: '#ffffff', }, //Style object for the tab bar
      labelStyle: {//labelStyle - Style object for the tab label.
        fontSize: 12, // 文字大小  
      },
      //tabStyle - Style object for the tab.
      // allowFontScaling - Whether label font should scale to respect Text Size accessibility settings, default is true
    }
  }
);
// export default homeStack;




