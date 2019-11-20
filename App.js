import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import LoginPage from './src/screens/login'
import RegisterPage from './src/screens/register'
import Home from './src/screens/home'
import MainStack from './src/routers/login_register_home'
import 'react-native-gesture-handler'

export default class App extends Component {
  render() {
    return (
      <MainStack/>
    );
  }
}
