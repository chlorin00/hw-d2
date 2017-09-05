import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import firebase from '../firebase';

const Form = t.form.Form;

const Person = t.struct({
        username: t.String,
        password: t.String
});

let options = {
    fields: {
        password: { secureTextEntry: true }
    }
};

export default class LoginPage extends Component {

    onPress = () => {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value); // value here is an instance of Person
            console.log('confirm user login!');
            firebase.auth().signInWithEmailAndPassword(value.username,value.password)
            .then((user) => {
                console.log('User successfully logged in', user)
                Actions.listPage({})
            })
            .catch((err) => {
                console.error('User signin error', err);
            });
        }
      }
    
    render() {
        return (
          <View style = {styles.container}>
            <Form
                ref = 'form'
                type = { Person }
                options = { options }
            />
            <TouchableHighlight style = {styles.btnLogin} onPress = {this.onPress} underlayColor = '#99d9f4'>
                <Text style = {styles.txBtnLogin}>- Login -</Text>
            </TouchableHighlight>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: 350,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    btnLogin: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderRadius: 8,
        margin: 10,
        justifyContent: 'center'
    },
    txBtnLogin: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});
