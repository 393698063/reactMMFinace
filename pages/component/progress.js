import { requireNativeComponent } from 'react-native';

// requireNativeComponent automatically resolves 'RNTProgress' to 'RNTProgressManager'
module.exports = requireNativeComponent('RNTProgress', null);