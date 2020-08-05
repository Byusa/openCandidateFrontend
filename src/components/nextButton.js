import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";

const NextButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.next} onPress={props.onPress}>
        <Text style={{ color: "white", fontSize: 18 }}>{props.btnTxt}</Text>
        <Icon
          name={"chevron-right"}
          style={{ marginLeft: 10, marginTop: 4 }}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  next: {
    borderWidth: 0.1,
    borderRadius: 25,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#2da8d3"
    //backgroundColor: "#2a5298"
  }
});

export default NextButton;
