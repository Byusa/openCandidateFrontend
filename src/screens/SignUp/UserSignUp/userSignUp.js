import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Header from "../../../components/header";
const { width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import NextButton from "../../../components/nextButton";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

class CreateUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPass: "",
      f: false,
      l: false,
      e: false,
      p: false,
      c: false,
      fCon: false,
      lCon: false,
      eCon: false,
      pCon: false
    };
  }

  renderFirebaseErrorMessage = () => {
    var err = this.props.create_user.error;
    if (err) {
      return <Text style={{ marginTop: 20, color: "red" }}>{err}</Text>;
    }
  };

  firstName = () => {
    if (this.state.f) {
      if (this.state.firstName === "") {
        return <Text style={styles.errorMessage}>first name is empty</Text>;
      }
    }
  };
  lastName = () => {
    if (this.state.l) {
      if (this.state.lastName === "") {
        return <Text style={[styles.errorMessage]}>last name is empty</Text>;
      }
    }
  };
  email = () => {
    if (this.state.e) {
      if (this.state.email === "") {
        return <Text style={[styles.errorMessage]}>email can't be empty</Text>;
      }
    }
  };
  phone = () => {
    if (this.state.p) {
      if (this.state.phone === "") {
        return (
          <Text style={[styles.errorMessage]}>phone number can't be empty</Text>
        );
      }
    }
  };
  password = () => {
    const { password, confirmPass } = this.state;
    if (this.state.p) {
      if (password === "" || confirmPass === "") {
        return (
          <Text style={[styles.errorMessage]}>password can't be empty</Text>
        );
      } else {
        if (password.localeCompare(confirmPass) === 0) {
          // this.setState({ pCon: true });
          return (
            <View style={styles.nameInput}>
              <Text style={[styles.errorMessage, styles.color]}>
                password match
              </Text>
              <Icon
                name={"check"}
                color={"green"}
                style={styles.icon}
                size={16}
              />
            </View>
          );
        } else {
          return (
            <Text style={[styles.errorMessage]}>password did not match</Text>
          );
        }
      }
    }
  };

  createUser = () => {
    const { navigate } = this.props.navigation;
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPass
    } = this.state;
    this.setState({ f: true });
    this.setState({ l: true });
    this.setState({ e: true });
    this.setState({ p: true });
    this.setState({ c: true });
    // firstName,lastName,email,phone,city,companyName,password
    if (firstName && lastName && email && password && confirmPass) {
      if (password.localeCompare(confirmPass) === 0) {
        this.props.createUser(
          firstName,
          lastName,
          email,
          phone,
          "",
          "",
          password
        );
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Personal Information"} />
        <View style={styles.introText}>
          <Text style={styles.txt}>Hang on! We are almost there</Text>
          {this.renderFirebaseErrorMessage()}
        </View>
        <View style={styles.formView}>
          <View>
            <View style={styles.nameInput}>
              <Icon
                name={"user"}
                style={{ marginTop: 10, marginLeft: 14 }}
                size={25}
              />
              <TextInput
                style={styles.textInput}
                placeholder={"First Name"}
                autoCorrect={false}
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
                underlineColorAndroid={"transparent"}
              />
              <TextInput
                style={[styles.textInput, styles.margin]}
                placeholder={"Last Name"}
                autoCorrect={false}
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                underlineColorAndroid={"transparent"}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 5 }}>{this.firstName()}</View>
              <View style={{ flex: 5 }}>{this.lastName()}</View>
            </View>
          </View>
          <View>
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
            {this.email()}
          </View>
          <View>
            <View style={styles.nameInput}>
              <Icon
                name={"phone"}
                size={25}
                color={"green"}
                style={{ marginTop: 20 }}
              />

              <TextInput
                style={[styles.email, styles.margin]}
                placeholder={"Phone Number"}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"numeric"}
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
                underlineColorAndroid={"transparent"}
              />
            </View>
            {this.phone()}
          </View>
          <View>
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
          </View>
          <View>
            <View style={styles.nameInput}>
              <Icon
                name={"unlock"}
                size={25}
                color={"gray"}
                style={{ marginTop: 20 }}
              />
              <TextInput
                style={[styles.email, styles.margin]}
                placeholder={" Confirm Password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry
                onChangeText={confirmPass => this.setState({ confirmPass })}
                underlineColorAndroid={"transparent"}
              />
            </View>
            {this.password()}
          </View>
          <View>
            <View style={{ marginTop: 30 }}>
              <NextButton onPress={this.createUser} />
            </View>
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
  introText: {
    marginTop: 10,
    marginLeft: 10
  },
  txt: {
    //fontFamily: "lato",
    fontSize: 16
  },
  formView: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    marginTop: 40,
    marginBottom: 40
  },
  nameInput: {
    flexDirection: "row"
  },
  textInput: {
    width: (width - 40) / 2,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "gray",
    textAlign: "center"
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
  errorMessage: {
    color: "red",
    marginLeft: 30
  },
  marginLeft: {
    marginLeft: width - 10 / 2
  },
  color: {
    color: "green"
  },
  marginIcon: {
    marginTop: 5,
    marginLeft: 15
  }
});

/*
 name
 phone number
 email
 password
*/

function mapStateToProps(state) {
  return {
    create_profile: state.create_profile,
    create_user: state.create_user
  };
}

export default connect(mapStateToProps, actions)(CreateUserProfile);
