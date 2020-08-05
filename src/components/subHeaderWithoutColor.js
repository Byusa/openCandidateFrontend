import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const SubHeaderWithoutColor = props => {
  return (
    <View style={styles.fView}>
      <Text style={styles.text}>{props.firstText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    //fontFamily: 'Lato-Regular'
  },
  fView: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 3,
    backgroundColor: "transparent",
    height: 40,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "gray"
  }
});

export default SubHeaderWithoutColor;
