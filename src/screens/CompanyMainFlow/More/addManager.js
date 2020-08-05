import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AddManager extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddManager Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
