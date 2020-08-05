import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Slider,
  Picker,
  Dimensions,
  Switch
} from "react-native";
import Header from "../../../components/header";
import { Dropdown } from "react-native-material-dropdown";
const { width, height } = Dimensions.get("window");

export default class Filter extends Component {
  data = [
    {
      value: "Apprentice Bartender"
    },
    {
      value: "Area Director"
    },
    {
      value: "Assistant Chef"
    },
    {
      value: "Assistant General Manager"
    },
    {
      value: "Assistant Kitchen Manager"
    },
    {
      value: "Associate Creative Director"
    },
    {
      value: "Baker"
    },
    {
      value: "Bakery-Cafe Associate"
    },
    {
      value: "Barback"
    },
    {
      value: "Barista"
    },
    {
      value: "Bar Manager"
    },
    {
      value: "Bartender"
    },
    {
      value: "Brand Manager"
    },
    {
      value: "Bus Person"
    },
    {
      value: "Cashier"
    },
    {
      value: "Casual Restaurant Manager"
    },
    {
      value: "Chef"
    },
    {
      value: "Chef Manager"
    },
    {
      value: "Coffee Tasting Room Assistant"
    },
    {
      value: "Communications Manager"
    },
    {
      value: "Cook"
    },
    {
      value: "Culinary Services Supervisor"
    },
    {
      value: "Culinary Trainee"
    },
    {
      value: "Dessert Finisher"
    },
    {
      value: "Digital Marketing Manager"
    },
    {
      value: "Dining Room Manager"
    },
    {
      value: "Director of Human Resources"
    },
    {
      value: "Dishwasher"
    },
    {
      value: "District Manager"
    },
    {
      value: "Espresso Beverage Maker"
    },
    {
      value: "Executive Chef"
    },
    {
      value: "Expeditor"
    },
    {
      value: "Field Recruiting Manager"
    },
    {
      value: "Fine Dining Restaurant Manager"
    },
    {
      value: "Food Runner"
    },
    {
      value: "Front Manager"
    },
    {
      value: "Grill Cook"
    },
    {
      value: "Hibachi Chef"
    },
    {
      value: "Host"
    },
    {
      value: "Human Resources Manager"
    },
    {
      value: "Inventory Analyst"
    },
    {
      value: "Kitchen Manager"
    },
    {
      value: "Kitchen Worker"
    },
    {
      value: "Lead Cook"
    },
    {
      value: "Line Cook"
    },
    {
      value: "Prep Cook"
    },
    {
      value: "Restaurant General Manager"
    },
    {
      value: "Restaurant Manager"
    },
    {
      value: "Server"
    },
    {
      value: "Shift Supervisor"
    },
    {
      value: "Sous Chef"
    },
    {
      value: "Steward"
    }
  ];

  state = {
    jobType: "",
    replaceMent: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"FILTER"} style={{ height: 200 }} />
        <Dropdown label="Position" data={this.data} />
        <View style={{ marginTop: 15 }}>
          <Text
            style={{ marginTop: 15, marginLeft: 15 /* fontFamily: "Roboto" */ }}
          >
            Max Salary desired by candidate:
          </Text>
          <Slider onSlidingComplete={val => alert(val)} minimumValue={0.0008} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15
          }}
        >
          <Text
            style={{ marginTop: 15, marginLeft: 15 /* fontFamily: "Roboto" */ }}
          >
            Available for sick call in:
          </Text>
          <Switch
            style={{ marginRight: 10, marginTop: 15 }}
            onValueChange={value => this.setState({ replaceMent: value })}
            value={this.state.replaceMent}
          />
        </View>
        <Text>{this.state.replaceMent}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
