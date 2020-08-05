import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DetailsJobPage extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Jobs Page </Text>
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
