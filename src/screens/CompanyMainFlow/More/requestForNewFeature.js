import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import Header from "../../../components/header";
import firebase from "react-native-firebase";
var user = firebase.auth().currentUser;

export default class RequestFeature extends Component<{}> {
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
      <SafeAreaView style={styles.container}>
        <Header
          headerText={"Feature Request"}
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
          placeholder={"How can we improve?"}
          placeholderTextColor={"black"}
        />
      </SafeAreaView>
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
    // marginLeft: 10
  },
  default: {
    // borderColor: "gray",
    // borderWidth: 1,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 15
  }
});
