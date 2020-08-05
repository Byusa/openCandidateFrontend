import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");

const Titles = props => {
  return (
    <View style={styles.container}>
      <Icon name={props.iconName} size={20} color={props.color} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20
  },
  text: {
    //fontFamily: "roboto",
    marginLeft: width / 5 - 2,
    color: "#c6c6c6",
    opacity: 2,
    fontSize: 15
  }
});

export default Titles;
