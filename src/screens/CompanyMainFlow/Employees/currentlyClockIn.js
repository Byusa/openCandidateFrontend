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

export default class CurrentlyClockIn extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: "Employees",
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

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const result = await fetch(`https://randomuser.me/api?results=10`);
    const json = await result.json();
    this.setState(state => ({
      data: [...this.state.data, ...json.results],
      loading: false
    }));
  };

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
                /* fontFamily: "Lato-Regular", */ opacity: 1
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

  hoursScreen = () => {
    this.setState({
      hours: true,
      currentlyClockIn: false
    });
  };

  render() {
    if (this.state.hours) {
      return <WeeklyHours />;
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
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
    flexDirection: "row",
    height: 70,
    borderBottomWidth: 0.29,
    borderColor: "gray",
    alignItems: "center"
  }
});
