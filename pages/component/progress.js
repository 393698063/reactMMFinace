import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';



class ProgressView extends React.Component {
    render() {
      return <RNTProgress {...this.props} />;
    }
  }

  ProgressView.propTypes = {
    progress:PropTypes.number,
    ProgressString:PropTypes.string,
  }


// requireNativeComponent automatically resolves 'RNTProgress' to 'RNTProgressManager'
module.exports = requireNativeComponent('RNTProgress', ProgressView);