import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import RNGooglePlaces from "react-native-google-places";
import GooglePlacesInput from "../../../components/searchResult";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Header from "../../../components/header";
import Icon from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");
import NextButton from "../../../components/nextButton";

/*
    Use google autocomplete here to get the location
    and use places details to get the following details 
    1) Photos
    2) weekdays/hours of operation
    3) number
    4) Website url
*/

class CreateCompanyProfile extends Component {
  state = {
    isEmpty: true
  };
  openSearchModal = async () => {
    try {
      const place = await RNGooglePlaces.openAutocompleteModal();
      console.log(place);
    } catch (error) {
      console.log(error);
    }
  };

  moveTonextScreen = () => {
    const { navigate } = this.props.navigation;
    if (this.props.create_profile.companyName === "") {
      alert("You need a enter the name of your company to create a profile");
      return;
    }
    navigate("companyCreaterProfile");
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Company Name"} />
        <Text style={styles.txt}>
          To create a company profile we need a name and location of your
          company
        </Text>
        <View style={styles.comNameView}>
          <Icon name={"ios-restaurant"} size={25} />
          <Text style={styles.text}>Company Name: </Text>
          <TouchableOpacity
            style={styles.TextInput}
            onPress={this.props.createCompanyProfile}
          >
            <Text style={styles.companyName}>
              {this.props.create_profile.companyName}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <NextButton onPress={this.moveTonextScreen} btnTxt={"Next"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 100,
    marginLeft: 100
  },
  text: {
    // fontFamily: "Roboto",
    marginLeft: 10
  },
  comNameView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 7
  },
  TextInput: {
    width: width / 2,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  txt: {
    marginTop: 10,
    marginLeft: 10
    //fontFamily: "Roboto-Light"
  },
  companyName: {
    //fontFamily: "Roboto",
    fontSize: 20,
    marginLeft: 10
  },
  btn: {
    flex: 3,
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, actions)(CreateCompanyProfile);
