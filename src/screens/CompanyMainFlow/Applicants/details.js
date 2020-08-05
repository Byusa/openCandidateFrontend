import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import Header from "../../../components/header";
import SubHeaderWithoutColor from "../../../components/subHeaderWithoutColor";
const { width, height } = Dimensions.get("window");
import Applicants from "./applicants";
import Shortlisted from "./shortlistedapplicants";
import Interview from "./interview";
import firebase from "react-native-firebase";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: true,
      Shortlisted: false,
      interview: false,
      data: [],
      loading: true
    };
    this.ref = firebase.firestore().collection("users");
  }

  componentDidMount() {
    //dispatch an action to get the applicants
    this.props.getApplicants(this.props.navigation.state.params.data);
  }

  _applicants = () => {
    this.setState({
      applicants: true,
      Shortlisted: false,
      interview: false
    });
  };
  _shortlisted = () => {
    this.setState({
      applicants: false,
      Shortlisted: true,
      interview: false
    });
  };
  _interview = () => {
    this.setState({
      applicants: false,
      Shortlisted: false,
      interview: true
    });
  };

  renderScreen = () => {
    if (this.state.applicants) {
      return <Applicants />;
    } else if (this.state.Shortlisted) {
      return <Shortlisted />;
    } else {
      return <Interview />;
    }
  };

  render() {
    if (this.props.applicants.loading) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", paddingTop: 20 }}>
          <TouchableOpacity
            onPress={this._applicants}
            style={[
              this.state.applicants ? { backgroundColor: "#2da8d2" } : {}
            ]}
          >
            <SubHeaderWithoutColor
              firstText={`Applicants(${
                Object.keys(this.props.navigation.state.params.data).length
              })`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._shortlisted}
            style={[
              this.state.Shortlisted ? { backgroundColor: "#2da8d2" } : {}
            ]}
          >
            <SubHeaderWithoutColor firstText={"Shortlisted"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._interview}
            style={[this.state.interview ? { backgroundColor: "#2da8d2" } : {}]}
          >
            <SubHeaderWithoutColor firstText={"Interview"} />
          </TouchableOpacity>
        </View>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

function mapStateToProps(state) {
  return { applicants: state.getApplicants };
}

export default connect(mapStateToProps, actions)(Details);
