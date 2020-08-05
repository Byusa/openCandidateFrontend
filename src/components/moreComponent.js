import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Iconic from "react-native-vector-icons/FontAwesome";

//const { height, width } = Dimensions.get('window');
// <TouchableOpacity onPress={props.onPress}>

ion = props => {
  if (props.bool) return <Iconic name={props.firstIcon} size={18} />;
  return <Icon name={props.firstIcon} size={18} />;
};

const MoreComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.view}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 0.5 }}>{this.ion(props)}</View>
          <View style={{ flex: 9.5 }}>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
        <View>
          <Iconic
            name={props.secondIcon}
            style={{ marginRight: 22 }}
            size={22}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
    marginTop: 15
  },
  text: {
    marginLeft: 10,
    fontSize: 15
    //fontFamily: "Roboto"
    //color: "white"
  }
});

export default MoreComponent;
