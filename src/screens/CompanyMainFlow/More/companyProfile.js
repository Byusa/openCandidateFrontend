import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Slider from "../../../components/companyImagesSlideShow";
import Titles from "../../../components/companyProfileTitles";
import Hours from "../../../components/hoursOfOperation";
import Header from "../../../components/header";
const { height, width } = Dimensions.get("window");
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

class CompanyProfile extends Component<{}> {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      hoursOfOperation: [
        "Monday: Closed",
        "Tuesday: 11:30a.m.–2p.m.,5–11p.m",
        "Wednesday: 11:30a.m.–2p.m.,5–11p.m",
        "Thursday: 11:30a.m.–2p.m.,5–11p.m",
        "Friday: 11:30a.m.–2p.m.,5–11p.m",
        "Saturday: 5–11p.m",
        "Sunday: Closed"
      ],
      phone: "+1 514-438-558",
      email: "tiradito@gmail.com",
      website: "www.tiradito.com"
    };
  }

  renderHoursOfOperation = () => {
    return this.props.create_profile.weekly_hours.map((item, i) => {
      var result = item.replace(/y:/gi, "y:,");
      result = result.split(",");
      if (result.length === 2) {
        return <Hours key={i} daysOfTheWeek={result[0]} hours={result[1]} />;
      } else {
        return (
          <Hours
            key={i}
            daysOfTheWeek={result[0]}
            hours={result[1]}
            hours2={result[2]}
          />
        );
      }
    });
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={"Business"}
          leftIcon={"angle-left"}
          onPress={() => goBack()}
        />
        <ScrollView style={styles.container}>
          <View style={{ height: 230 }}>
            <Slider />
            <Text style={styles.companyNameText}>
              {this.props.create_profile.companyName}
            </Text>
          </View>
          <Titles iconName={"map-marker"} title={"ADDRESS"} color={"#2271dc"} />
          <Text style={styles.text}>{this.props.create_profile.address}</Text>
          <Titles
            iconName={"clock-o"}
            title={"HOURS OF OPERATION"}
            color={"#eadf98"}
          />

          {this.renderHoursOfOperation()}

          <Titles iconName={"phone"} title={"PHONE"} color={"green"} />
          <Text style={styles.text}>{this.props.create_profile.phone}</Text>
          <Titles iconName={"envelope-o"} title={"EMAIL"} color={"red"} />
          <Text style={styles.text}>{this.state.email}</Text>
          <Titles iconName={"wpexplorer"} title={"WEBSITE"} color={"#2271dc"} />
          <Text style={styles.text}>{this.props.create_profile.website}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    //fontFamily: "roboto",
    marginLeft: width / 5 + 30,
    marginTop: 10,
    color: "#636363",
    fontSize: 14
  },
  companyNameText: {
    marginLeft: 15,
    fontSize: 20,
    //fontFamily: "Lato-Regular",
    marginTop: 10,
    paddingTop: 12
  }
});

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, actions)(CompanyProfile);
