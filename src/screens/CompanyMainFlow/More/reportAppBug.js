import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "../../../components/header";
import firebase from "react-native-firebase";
var user = firebase.auth().currentUser;

export default class AppBugReport extends Component<{}> {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    description: "",
    height: 0
  };
  componentWillMount() {
    if (user) {
      console.log(user);
    } else {
      console.log("user doesn't exist");
    }
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          headerText={"Report Bug"}
          leftIcon={"angle-left"}
          onPress={() => goBack()}
        />
        <View style={styles.emailInput}>
          <TextInput
            style={{ height: 50, marginLeft: 10 }}
            placeholder={"Enter your email"}
            placeholderTextColor={"black"}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>
        <TextInput
          {...this.props}
          multiline={true}
          onChangeText={text => {
            this.setState({ description: text });
          }}
          onContentSizeChange={event => {
            this.setState({ height: event.nativeEvent.contentSize.height });
          }}
          style={[styles.default, { height: Math.max(140, this.state.height) }]}
          value={this.state.text}
          underlineColorAndroid={"transparent"}
          placeholder={"What went wrong?"}
          placeholderTextColor={"black"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emailInput: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "gray"
    //marginLeft: 10
  },
  default: {
    marginLeft: 15,
    marginRight: 5,
    marginTop: 15
  }
});
