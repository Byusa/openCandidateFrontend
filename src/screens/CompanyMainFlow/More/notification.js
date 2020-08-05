import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header";
import NotificationComponent from "././../../../components/notificationComponent";

export default class Notification extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header
          headerText={"Notifications"}
          leftIcon={"angle-left"}
          onPress={() => goBack()}
        />
        <NotificationComponent name={"Employee Clock In"} />
        <View style={styles.border} />
        <NotificationComponent name={"New Applicant"} />
        <View style={styles.border} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingTop: 10
  }
});
