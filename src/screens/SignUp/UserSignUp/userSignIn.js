import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NextButton from "../../../components/nextButton";
import Header from "../../../components/header";
const { width } = Dimensions.get("window");

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Sign In"} />
        <View style={styles.SignIn}>
          <View style={styles.nameInput}>
            <Icon
              name={"envelope-o"}
              size={25}
              color={"red"}
              style={{ marginTop: 20 }}
            />
            <TextInput
              style={[styles.email, styles.margin]}
              placeholder={"Email"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              underlineColorAndroid={"transparent"}
            />
          </View>
          <View style={styles.nameInput}>
            <Icon
              name={"unlock"}
              size={25}
              color={"gray"}
              style={{ marginTop: 20 }}
            />
            <TextInput
              style={[styles.email, styles.margin]}
              placeholder={"Password"}
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid={"transparent"}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <NextButton btnTxt={"Sign In"} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  SignIn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  nameInput: {
    flexDirection: "row"
  },
  margin: {
    marginLeft: 10
  },
  email: {
    width: width / 1.2,
    marginRight: 10,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    marginTop: 10
  }
});
