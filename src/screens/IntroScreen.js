import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import firebase from "react-native-firebase";

const { height, width } = Dimensions.get("window");

let db = firebase.firestore();
class App extends Component<{}> {
  state = {
    data: {}
  };

  testPlacesDetailsApi = async () => {
    try {
      let result = await fetch(
        "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJhw0su1oayUwRbh65uWdms2E&key=AIzaSyDcWKkFpcT7Ws1DAZe1ruR4svsIE6X0oLg"
      );
      let json = JSON.parse(result._bodyText);
      const photoRef = json.result.photos[0].photo_reference;

      let photos = await fetch(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyDcWKkFpcT7Ws1DAZe1ruR4svsIE6X0oLg`
      );
      //let test = photos.json();
      console.log(photos.url);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>Let's get started!</Text>
        <TouchableOpacity onPress={() => navigate("userSignUp")}>
          <Text>find a job!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => navigate("createCompanyProfile")}
        >
          <Text>start Hiring!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99ccff"
  },
  text: {
    color: "white",
    fontSize: 24,
    ...Platform.select({
      ios: {
        fontFamily: "system font"
      },
      android: {
        fontFamily: "Roboto"
      }
    })
  },
  btn: {
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100,
    width: width - 100,
    backgroundColor: "blue",
    borderRadius: 100
  }
});

function mapStateToProps({ fetch }) {
  return { result: fetch.token };
}

export default connect(mapStateToProps, actions)(App);
