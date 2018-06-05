/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
/**
 * Makes the Redux store available to the connect() 
 * calls in the component hierarchy below.
 * 使Redux存储对下面组件层次结构中的connect()调用可用
 */
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import AppReducer from './pages/reducers';
import AppWithNavigationState from './router/navigationStack';
import { middleware } from './pages/utils/redux';


const store = createStore(
    AppReducer,
    applyMiddleware(middleware),
  );

  export default class ReduxExampleApp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
  }
  /**
   * The data lifecycle in any Redux app follows these 4 steps:
   * 1.You call store.dispatch(action).
   * 2.The Redux store calls the reducer function you gave it
   * 3.The root reducer may combine the output of multiple reducers 
   * into a single state tree.
   * 4.The Redux store saves the complete state tree returned 
   * by the root reducer If you use bindings like React Redux, 
   *  this is the point at which component.setState(newState) is called.
   */


