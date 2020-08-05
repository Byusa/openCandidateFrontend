import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/header";
import SubHeader from "../../../components/subHeader";
import Avator, { Avatar } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import WeeklyHours from "./weeklyHours";
import CurrentlyClockIn from "./currentlyClockIn";

export default class Employees extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: "Employe",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcon name={"account-multiple"} size={22} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentlyClockIn: true,
      hours: false
    };
  }

  componentWillMount() {}

  _renderItem(item) {
    return (
      <View style={styles.mainViewForRenderItem}>
        <Avatar
          medium
          rounded
          source={{ uri: item.picture.thumbnail }}
          containerStyle={{ marginLeft: 15 }}
        />
        <View style={{ marginLeft: 12 }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                /* fontFamily: "Lato-Regular",  */ opacity: 1
              }}
            >{`${item.name.first} ${item.name.last}`}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name={"location-arrow"}
              size={18}
              style={{ color: "gray", opacity: 0.5, marginTop: 5 }}
              size={15}
            />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                color: "gray",
                fontSize: 12
              }}
            >{`${item.location.city}, ${item.nat}`}</Text>
          </View>
        </View>

        <Text
          style={{
            position: "absolute",
            bottom: 100,
            right: 12
            //fontFamily: "Roboto"
          }}
        >
          {item.registered.split(" ")[1]}
        </Text>
      </View>
    );
  }
  clockInHours = () => {
    this.setState({
      hours: false,
      currentlyClockIn: true
    });
  };
  hoursScreen = () => {
    this.setState({
      hours: true,
      currentlyClockIn: false
    });
  };
  renderScreen = () => {
    if (this.state.currentlyClockIn) {
      return <CurrentlyClockIn />;
    } else if (this.state.hours) {
      return <WeeklyHours />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Employees"} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.clockInHours}>
            <SubHeader
              firstText={"Clock In"}
              bool={this.state.currentlyClockIn}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.hoursScreen}>
            <SubHeader firstText={"Hours"} bool={this.state.hours} />
          </TouchableOpacity>
        </View>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainViewForRenderItem: {
    flexDirection: "row",
    height: 70,
    borderColor: "gray",
    alignItems: "center"
  }
});
