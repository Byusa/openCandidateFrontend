import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  Switch,
  TouchableWithoutFeedback
} from "react-native";
import Header from "../../../components/header";
const { width, height } = Dimensions.get("window");
import LinearGradient from "react-native-linear-gradient";
import MoreComponent from "../../../components/moreComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class More extends Component<{}> {
  // static navigationOptions = {
  //   tabBarLabel: "More",
  //   header: null,
  //   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //   tabBarIcon: ({ tintColor }) => <Icon name={"bars"} size={22} />
  // };
  state = {
    jobType: "",
    replaceMent: false
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header headerText={"More"} />
        <ScrollView>
          <View style={styles.imageView} />
          <View style={styles.shadow} />
          <MoreComponent
            text={"Notification"}
            firstIcon={"md-notifications"}
            secondIcon={"angle-right"}
            onPress={() => navigate("notification")}
          />
          <View style={styles.shadowV} />
          <MoreComponent
            text={"Post a Job"}
            firstIcon={"md-filing"}
            secondIcon={"angle-right"}
            onPress={() => navigate("postJob")}
          />
          <View style={styles.border} />
          <MoreComponent
            text={"Company Profile"}
            firstIcon={"md-briefcase"}
            secondIcon={"angle-right"}
            onPress={() => navigate("companyProfile")}
          />
          <View style={styles.border} />
          <MoreComponent
            text={"Add Another Manager"}
            firstIcon={"md-person-add"}
            secondIcon={"angle-right"}
          />
          <View style={styles.border} />
          <MoreComponent
            text={"Add Employee"}
            firstIcon={"md-person-add"}
            secondIcon={"angle-right"}
          />
          <View style={styles.border} />
          <MoreComponent
            text={"Generate QR Code"}
            firstIcon={"qrcode"}
            secondIcon={"angle-right"}
            bool={true}
            onPress={() => navigate("qrpage")}
          />
          <View style={styles.border} />
          <View
            style={{
              flexDirection: "row",
              //justifyContent: "space-between"
              flex: 1
            }}
          >
            <View style={{ flex: 8.5 }}>
              <TouchableWithoutFeedback>
                <MoreComponent
                  text={"Switch to Job Search"}
                  firstIcon={"md-switch"}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={{ flex: 1.5 }}>
              <Switch
                style={{ marginRight: 10, marginTop: 15 }}
                onValueChange={value => this.setState({ replaceMent: value })}
                value={this.state.replaceMent}
              />
            </View>
          </View>
          <View style={styles.shadow} />
          <MoreComponent
            text={"Settings"}
            firstIcon={"md-cog"}
            secondIcon={"angle-right"}
            onPress={() => navigate("settings")}
          />
          <View style={styles.shadowV} />
          <MoreComponent text={"Invite"} secondIcon={"angle-right"} />
          <View style={styles.border} />
          <MoreComponent text={"Review RestoJobs"} secondIcon={"angle-right"} />
          <View style={styles.border} />
          <MoreComponent
            text={"Request for a new feature"}
            secondIcon={"angle-right"}
            onPress={() => navigate("requestFeature")}
          />
          <View style={styles.border} />
          <MoreComponent
            text={"Report App Bug"}
            secondIcon={"angle-right"}
            onPress={() => navigate("appBugReport")}
          />
          <View style={styles.shadow} />
          <MoreComponent text={"Sign Out"} firstIcon={"md-log-out"} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC"
    //  backgroundColor: "black"
  },
  imageView: {
    height: height / 6
  },
  header: {
    height: 60,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15
  },
  text: {
    // color: "white",
    //fontFamily: "Roboto",
    //fontWeight: "bold",
    fontSize: 16
  },
  shadow: {
    height: 40,
    backgroundColor: "#F1F1F1",
    marginTop: 8
  },
  shadowV: {
    height: 60,
    backgroundColor: "#F1F1F1",
    marginTop: 15
  },
  signOut: {
    justifyContent: "center",
    alignItems: "center"
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingTop: 10
  }
});
