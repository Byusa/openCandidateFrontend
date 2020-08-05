import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Experience = props => {
  return (
    <View style={styles.compensation}>
      <Text style={{}}>{props.experienceType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  compensation: {
    height: 40,
    width: (width / 3 - 15) * 3 / 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "gray"
  }
});

export default Experience;
