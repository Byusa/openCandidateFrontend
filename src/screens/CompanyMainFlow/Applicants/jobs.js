import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
const { width, height } = Dimensions.get("window");
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
//three screens
import Applicants from "./applicants";
import Interview from "./interview";
import Shortlisted from "./shortlistedapplicants";
import Header from "../../../components/header";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Firebase from "../../../firebase/firebaseCode";
let firebaseCode = new Firebase();
class Jobs extends Component {
  static navigationOptions = {
    tabBarLabel: "Applicants",
    header: null,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcon name={"briefcase-check"} size={22} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.ref = firebase
      .firestore()
      .collection("location")
      .doc(this.props.profile.city)
      .collection("jobsPosted")
      .where("companyName", "==", this.props.profile.companyName);
    this.unsubscribe = null;
  }

  //life cycle methods
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.props.fetchJobs);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  _renderItem(item) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate("details", { data: item._data.applicants })}
      >
        <View style={styles.mainViewForRenderItem}>
          <View style={{ justifyContent: "space-around", marginLeft: 15 }}>
            <Text style={{ fontSize: 16 /* fontFamily: "Roboto"  */ }}>
              {item._data.position}
            </Text>
            <Text>{item._data.date.split(" ")[0]}</Text>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#2da8d2",
              justifyContent: "center",
              alignItems: "center",
              margin: 15
            }}
          >
            <Text
              style={{
                marginLeft: 5,
                color: "black",
                fontSize: 14
                //fontFamily: "Lato"
              }}
            >
              {Object.keys(item._data.applicants).length}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _noPostedJobYet = () => {
    if (this.state.data.length === 0) {
      return (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>No posted job!</Text>
        </View>
      );
    }
  };

  //function to go to next screen

  render() {
    if (this.props.fetch.isFetchingData) {
      return (
        <View style={{ flex: 1 }}>
          <Header headerText={"Jobs Posted"} />
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header headerText={"Jobs Posted"} onPressLeftIcon={this.update} />
        <FlatList
          data={this.props.fetch.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => this._renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainViewForRenderItem: {
    height: 80,
    //width,
    justifyContent: "space-between",
    //flex: 1,
    borderBottomWidth: 0.8,
    borderColor: "gray",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 16
  }
});

function mapStateToProps(state) {
  return {
    fetch: state.fetch,
    profile: state.create_profile
  };
}

export default connect(mapStateToProps, actions)(Jobs);
