import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import Header from "../../../components/header";
import Next from "../../../components/nextButton";
import Icon from "react-native-vector-icons/FontAwesome";
import RNGooglePlaces from "react-native-google-places";

const { width } = Dimensions.get("window");

export default class Phone extends Component {
  state = {
    phone: ""
  };
  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     console.log(position);
    //   },
    //   error => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );
    var NY = {
      lat: 37.3304,
      lng: -122.0293
    };
    // Geocoder.geocodeAddress("New York")
    //   .then(res => {
    //     // res is an Array of geocoding object (see below)
    //   })
    //   .catch(err => console.log(err));
  }
  location = () => {
    if (!this.state.phone) {
      return alert("You need to provide a phone number");
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 5 }}>
          <Header headerText={"Phone Number"} />
          <Text style={{ margin: 30 }}>
            Hang on we need few informations from you to complete the
            registration process
          </Text>
        </View>
        <View style={{ flex: 5 }}>
          <View style={styles.nameInput}>
            <Icon
              name={"phone"}
              size={25}
              color={"green"}
              style={{ marginTop: 20, marginLeft: 10 }}
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
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Next btnTxt={"Next"} onPress={this.location} />
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
