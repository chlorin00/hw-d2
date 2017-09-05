import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class LoginPage extends Component {
    
    render() {
        return (
          <View style = {styles.container}>
            <Text> Hello </Text>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    }
});
