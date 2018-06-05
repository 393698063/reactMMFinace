import { connect } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';
import {createStackNavigator} from 'react-navigation';
import { navigationPropConstructor } from '../pages/utils/redux';
import {
  Image,
} from 'react-native';
import React, { Component } from 'react';
import tabStack from './tabStack';
import homeNews from '../pages/Home/homeNew';
import Login from '../pages/Login/LoginScreen'
import PropTypes from 'prop-types';

export const AppNavigator = createStackNavigator({ // (RouteConfigs, StackNavigatorConfig)
  Home: {
    // For each screen that you can navigate to, create a new entry like this:
    screen: tabStack,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    // path: 'people/:name',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    // navigationOptions: ({ navigation }) => ({
    //   title: "${navigation.state.params.name}'s Profile'",
    // }),
  },
  Login:{
    screen:Login,
  },
  homeNews: {
    screen: homeNews,
  },
},
  { //StackNavigatorConfig
    // initialRouteName - Sets the default screen of the stack. Must match one of the keys in route configs.
    // initialRouteParams - The params for the initial route
    // navigationOptions - Default navigation options to use for screens
    // paths - A mapping of overrides for the paths set in the route configs
    // Visual options: {
          /**
           * mode - Defines the style for rendering and transitions:
              card - Use the standard iOS and Android screen transitions. This is the default.
              modal - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.
              headerMode - Specifies how the header should be rendered:
              float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
              screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
              none - No header will be rendered.
              headerTransitionPreset - Specifies how the header should transition from one screen to another when headerMode: float is enabled.
              fade-in-place - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value.
              uikit - An approximation of the default behavior for iOS.
              cardStyle - Use this prop to override or extend the default style for an individual card in stack.
              transitionConfig - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in type definitions). Provided function will be passed the following arguments:
              transitionProps - Transition props for the new screen.
              prevTransitionProps - Transitions props for the old screen.
              isModal - Boolean specifying if screen is modal.
              onTransitionStart - Function to be invoked when the card transition animation is about to start.
              onTransitionEnd - Function to be invoked once the card transition animation completes.
           */
    // },
     navigationOptions:  ({ navigation }) => {
      //  console.log('-------------------');
      //  console.log('aaa' + navigation.navigationOptions);
      //  console.log('aaa' + ':' + navigation.state);
      // //  console.log(navigation.navigation.state.params);
      // console.log('-------------------');
      // const params = navigation.state.params || {};
      return {
        // React Element or a function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header
        headerStyle: {backgroundColor:'#ff6131',}, //Style object for the header
        headerTitleStyle: {color:'#fff', fontSize:18},//Style object for the title component
        // headerBackImage: require('../img/ic_back.png'),
        headerTintColor: {color: '#fff'},
        // headerLeft: <backButton/>
        // headerLeft: <Image
        //   source = {require('../img/ic_back.png')}
        //   style = {{width:16, height:15.2, left:20}}
        //   onPress = {() => this.props.navigation.goBack()}
        // />,

      };
    },
    // navigationOptions: {
    //   headerStyle: {backgroundColor:'#ff6131'},
    //   headerBackground: '#ff6131',
    //   // headerTintColor:  '#ff6131',
    // },
  });

class navigateStack extends Component {
  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }
  render() {
    const { dispatch, nav } = this.props;
    const navigation = navigationPropConstructor(dispatch, nav);
    return <AppNavigator navigation={navigation} />;
  }
}

navigateStack.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
});

/**
 * To use connect(), you need to define a special function 
 * called mapStateToProps that tells how to transform 
 * the current Redux store state into the props you want 
 * to pass to a presentational component you are wrapping
 */
//将props应用到渲染的组件 例如：AppWithNavigationState
export default connect(mapStateToProps)(navigateStack);