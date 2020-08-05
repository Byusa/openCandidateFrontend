import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Shortlisted extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
            <Text>Shortlisted canditades </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
