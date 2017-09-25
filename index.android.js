/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Container} from 'native-base';

import AppHeader from './src/components/appHeader';
import AppBody from './src/components/appBody';
import AppFooter from './src/components/appFooter';

export default class nativebase_template extends Component {
  render() {
    return (
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
    );
  }
}
AppRegistry.registerComponent('nativebase_template', () => nativebase_template);
