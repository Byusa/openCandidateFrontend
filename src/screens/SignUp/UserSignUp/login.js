import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../../components/header";

const { width } = Dimensions.get("window");

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  fbLogin = () => {
    this.props.facebookLogin();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Login"} />
        <View style={styles.firstView}>
          <Text style={styles.welcomeText}>Welcome to Restojobs</Text>
          <Text style={{ fontSize: 14, color: "gray", marginTop: 20 }}>
            Sign in to continue
          </Text>
        </View>
        <View style={styles.secondView}>
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
          <View style={{ alignItems: "flex-end" }}>
            <Text>Forget Password?</Text>
          </View>
          <LinearGradient
            colors={[
              "#309ad4",
              "#2ea1d3",
              "#2da8d3",
              "#2bb0d1",
              "#2ab8d0",
              "#28bfcf",
              "#27c6ce"
            ]}
          >
            <View
              style={{
                height: 40,
                width,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", backgroundColor: "transparent" }}>
                Sign In
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.thirdView}>
          <Text>-- or --</Text>
          <TouchableOpacity onPress={this.fbLogin}>
            <View
              style={{
                height: 35,
                width: width / 2,
                backgroundColor: "#3B5998",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white" }}>Login with facebook</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account</Text>
            <Text
              style={{ marginLeft: 10, color: "pink" }}
              onPress={() => alert("hello")}
            >
              Register Here!
            </Text>
          </View>
          <Text />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  firstView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  secondView: {
    flex: 4,
    justifyContent: "space-around",
    alignItems: "center"
  },
  thirdView: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 20
    //fontFamily: "Lato-Regular"
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
  },
  nameInput: {
    flexDirection: "row"
  }
});

export default connect(null, actions)(Login);

/*
USER STRUCTURE!
  city: ""
  Companies: {}
  email: ""
  firstName: ""
  lastName: ""
  phoneNumber: ""
  userUid: ""
  experience: {}
  education: {}
  profileURL: ""
  averageRating: ""
  isManager: boolean
  




*/
