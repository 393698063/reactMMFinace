import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyBackButton extends React.Component {

    render() {
        var icon = this.props.theme == 'white' ? require('../img/ic_back_black.png') : require('../img/ic_back.png');
        return
        <TouchableHighlight onPress={console.log('touch')}>
      <Image
        style={styles.button}
        source={require('../img/ic_back_black.png')}
      />
    </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    icon: {
        color:'#fff',
        width: 16,
        height: 15.2,
        left: 20
    },
});

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);