import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default class BookDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text> Hello 3 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});