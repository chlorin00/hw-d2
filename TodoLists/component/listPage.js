import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import TodoList from './todoList';

export default class ListPage extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <TodoList/>
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
