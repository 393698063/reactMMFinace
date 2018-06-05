import {
    createReactNavigationReduxMiddleware,
    createNavigationPropConstructor,
  } from 'react-navigation-redux-helpers';
  // Note: createReactNavigationReduxMiddleware must 
//   be run before createNavigationPropConstructor
  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
  const navigationPropConstructor = createNavigationPropConstructor('root');
  
  export { middleware, navigationPropConstructor };