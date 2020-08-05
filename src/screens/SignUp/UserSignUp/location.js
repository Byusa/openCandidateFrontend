import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/header";
import Next from "../../../components/nextButton";
import Icon from "react-native-vector-icons/FontAwesome";
import RNGooglePlaces from "react-native-google-places";
//import Geocoder from "react-native-geocoding";

const { width } = Dimensions.get("window");
//Geocoder.setApiKey("AIzaSyDL7ughJ8WFroeGSCMH9hQ-V7vieWoRH44");
export default class Location extends Component {
  state = {
    city: "",
    error: "",
    lat: "",
    long: ""
  };
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       // ottawa 45.405787, -75.642922
  //       //quebec city
  //       Geocoder.getFromLatLng(46.778448, -71.156927).then(
  //         json => {
  //           var address_component = json.results[0].address_components[0];
  //           //alert(address_component.long_name);
  //           console.log(json);
  //         },
  //         error => {
  //           alert(error);
  //         }
  //       );
  //       console.log(position);
  //     },
  //     error => this.setState({ error: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  //   var NY = {
  //     lat: 37.3304,
  //     lng: -122.0293
  //   };
  //   // Geocoder.geocodeAddress("New York")
  //   //   .then(res => {
  //   //     // res is an Array of geocoding object (see below)
  //   //   })
  //   //   .catch(err => console.log(err));
  // }
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
          <Header headerText={"Location"} />
          <Text style={{ margin: 30 }}>
            We need your location to display jobs nearby!
          </Text>
        </View>
        <View style={{ flex: 5 }}>
          <View style={styles.nameInput}>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={this.allowAccess}
            >
              <Text>Allow Access</Text>
            </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center"
  }
});
