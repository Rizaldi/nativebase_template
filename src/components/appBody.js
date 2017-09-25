import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Text } from 'native-base';
export default class AppBody extends Component {
  render() {
    return (
    	<Content>
          <Text style={styles.container}>
            Muda Mudi Baraka
          </Text>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'red',
    fontWeight:'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.export = AppBody;