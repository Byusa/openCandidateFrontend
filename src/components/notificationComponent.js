import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

//const { height, width } = Dimensions.get('window');
// <TouchableOpacity onPress={props.onPress}>

const NotificationComponent = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.name}</Text>

      <Switch
        style={{ marginRight: 10 }}
        onValueChange={props.onValueChange}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    //flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
    marginTop: 15
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "Roboto",
    marginTop: 8
    // color: "black"
  }
});

export default NotificationComponent;
