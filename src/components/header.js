import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

const Header = props => {
  return (
    <LinearGradient
      colors={[
        "#309ad4",
        "#2ea1d3",
        "#2da8d3",
        "#2bb0d1",
        "#2ab8d0",
        "#28bfcf",
        "#27c6ce"

        //
        // "#1e3c72",
        // "#2a5298"

        // "#B7F8DB",
        // "#50A7C2"
      ]}
      //style={{ flexDirection: "row" }}
      //start={{ x: 0.0, y: 0.25 }}
      //end={{ x: 0.5, y: 1.0 }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon
            style={{ marginLeft: 12 }}
            name={props.leftIcon}
            color="white"
            size={28}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{props.headerText}</Text>
        <TouchableOpacity onPress={props.onPressLeftIcon}>
          <Icon
            style={{ marginRight: 12 }}
            name={props.rightIcon}
            color="white"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15
  },
  text: {
    color: "white",
    //fontFamily: "Roboto",
    fontSize: 18
  }
});

export default Header;
