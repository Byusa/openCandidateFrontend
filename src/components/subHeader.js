import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { height, width } = Dimensions.get("window");

const SubHeader = props => {
  if (props.bool) {
    return (
      <LinearGradient
        colors={[
          //"#309ad4",
          //"#2ea1d3",
          // "#2da8d3",
          //"#2bb0d1",
          "#2ab8d0",
          // "#28bfcf",
          "#27c6ce"
        ]}
      >
        <View style={styles.fView}>
          <Text style={[styles.text, styles.color]}>{props.firstText}</Text>
        </View>
      </LinearGradient>
    );
  }
  return (
    <View style={styles.fView}>
      <Text style={styles.text}>{props.firstText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    //fontFamily: "Roboto-Bold",
    fontSize: 16
  },
  fView: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 2,
    backgroundColor: "transparent",
    height: 40,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    //borderTopWidth: 1,
    borderColor: "gray"
  },
  color: {
    color: "white"
  }
});

export default SubHeader;
