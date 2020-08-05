import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const CompensationType = props => {
  return (
    <View style={styles.compensation}>
      <Text style={{}}>{props.compType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  compensation: {
    height: 40,
    width: width / 3 - 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray"
  }
});

export default CompensationType;
