/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginPage from './component/loginPage';
import ListPage from './component/listPage';

export default class TodoLists extends Component {
  render() {
    return (
      <Router>
        <Scene key = 'root'>
          <Scene key = 'loginPage' component = {LoginPage} title = 'Login' initial = {true} />
          <Scene key = 'listPage' component = {ListPage} title = 'Todo Lists' />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('TodoLists', () => TodoLists);
