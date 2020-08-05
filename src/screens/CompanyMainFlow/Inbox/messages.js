import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Messages extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: "Inbox",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => <Icon name={"bell-o"} size={22} />
  };
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Inbox"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
