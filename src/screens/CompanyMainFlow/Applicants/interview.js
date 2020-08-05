import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MoreComponent from "../../../components/moreComponent";

export default class Interview extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});
