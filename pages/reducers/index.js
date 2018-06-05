import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../router/navigationStack';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('homeNews');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
  /**
   * The reducer that outputs the new navigation state for a given action, with
   * an optional previous state. When the action is considered handled but the
   * state is unchanged, the output state is null.
   */
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  console.log('1-----');
  console.log(state);
  console.log(action);
//   switch (action.type) {
//     case 'Login':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case 'Logout':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Login' }),
//         state
//       );
//       break;
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;