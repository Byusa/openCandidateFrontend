import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Picker,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import Header from "../../../components/header";
import CompensationType from "../../../components/compensation";
import Experience from "../../../components/experience";
import firebase from "react-native-firebase";
import compensation from "../../../components/compensation";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

let db = firebase.firestore();

class PostJob extends Component {
  static navigationOptions = {
    header: null
  };
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

  constructor(props) {
    super(props);
    this.state = {
      fulltime: false,
      parttime: false,
      salary: false,
      hourly: false,
      tobeDiscussed: false,
      none: false,
      zeroToOne: false,
      oneToThree: false,
      threeToFive: false,
      fivetoTen: false,
      description: "",
      height: 0,
      selected: "",
      timeSchedule: "",
      compensation: "",
      compensationValue: "",
      experience: "",
      description: "",
      hourlyRate: "",
      monthlySalary: ""
    };
  }

  _onChangeText(value, i, data, field) {
    this.setState({ [field]: data[i].value });
  }

  userSelectedSalaryOrHourLy = () => {
    if (this.state.salary || this.state.hourly) {
      if (this.state.salary) {
        return (
          <View style={{ marginLeft: 24, flexDirection: "row", marginTop: 10 }}>
            <Text style={{ paddingTop: 5 }}>Enter salary:</Text>
            <TextInput
              style={{
                height: 30,
                width: 100,
                borderColor: "gray",
                borderWidth: 0.5,
                marginLeft: 10
              }}
              keyboardType="numeric"
              textAlign="center"
              underlineColorAndroid={"transparent"}
              onChangeText={text => this.setState({ monthlySalary: text })}
            />
          </View>
        );
      } else {
        return (
          <View style={{ marginLeft: 24, flexDirection: "row", marginTop: 10 }}>
            <Text style={{ paddingTop: 5 }}>Hourly Rate:</Text>
            <TextInput
              style={{
                height: 30,
                width: 100,
                borderColor: "gray",
                borderWidth: 0.5,
                marginLeft: 10
              }}
              keyboardType="numeric"
              textAlign="center"
              underlineColorAndroid={"transparent"}
              onChangeText={text => this.setState({ hourlyRate: text })}
            />
          </View>
        );
      }
    }
  };

  _fulltime = () => {
    this.setState({
      fulltime: true,
      parttime: false,
      timeSchedule: "Full Time"
    });
  };
  _parttime = () => {
    this.setState({
      fulltime: false,
      parttime: true,
      timeSchedule: "Part Time"
    });
  };
  _salary = () => {
    this.setState({
      salary: true,
      hourly: false,
      tobeDiscussed: false,
      compensation: "Salary",
      hourlyRate: ""
    });
  };
  _hourly = () => {
    this.setState({
      salary: false,
      hourly: true,
      tobeDiscussed: false,
      compensation: "Hourly",
      monthlySalary: ""
    });
  };
  _tobeDiscussed = () => {
    this.setState({
      salary: false,
      hourly: false,
      tobeDiscussed: true,
      compensation: "To be Discussed"
    });
  };
  _none = () => {
    this.setState({
      none: true,
      zeroToOne: false,
      oneToThree: false,
      threeToFive: false,
      fivetoTen: false,
      experience: "None"
    });
  };
  _zeroToOne = () => {
    this.setState({
      none: false,
      zeroToOne: true,
      oneToThree: false,
      threeToFive: false,
      fivetoTen: false,
      experience: "0 - 1 yrs"
    });
  };
  _oneToThree = () => {
    this.setState({
      none: false,
      zeroToOne: false,
      oneToThree: true,
      threeToFive: false,
      fivetoTen: false,
      experience: "1 - 3 yrs"
    });
  };
  _threeToFive = () => {
    this.setState({
      none: false,
      zeroToOne: false,
      oneToThree: false,
      threeToFive: true,
      fivetoTen: false,
      experience: "3 - 5 yrs"
    });
  };
  _fiveToTen = () => {
    this.setState({
      none: false,
      zeroToOne: false,
      oneToThree: false,
      threeToFive: false,
      fivetoTen: true,
      experience: "5 - 10 yrs"
    });
  };

  postJobToFireBase = () => {
    if (this.state.experience === "") {
      alert("Job description can't be expmty");
      return;
    } else if (this.state.compensation === "") {
      alert("Compensation can't be empty");
      return;
    } else if (this.state.timeSchedule === "") {
      alert("select a time schedule please");
      return;
    } else if (this.state.selected === "") {
      alert("Please select a position");
      return;
    } else {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      var today =
        mm +
        "-" +
        dd +
        "-" +
        yyyy +
        " " +
        today.getHours() +
        "-" +
        today.getMinutes() +
        "-" +
        today.getSeconds();

      const ref = firebase
        .firestore()
        .collection("location")
        .doc(this.props.create_profile.city)
        .collection("jobsPosted")
        .doc();

      var postJobObject = {
        companyName: this.props.create_profile.companyName,
        position: this.state.selected,
        timeSchedule: this.state.timeSchedule,
        compensation: this.state.compensation,
        experience: this.state.experience,
        description: this.state.description,
        date: today,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        placeID: this.props.create_profile.placeID,
        id: ref.id,
        hourlyRate: this.state.hourlyRate,
        monthlySalary: this.state.monthlySalary,
        applicants: {
          "1jyQHu3nzYS7LIe1vCYRcOTPDpF3": true,
          "1x9TsE0gFldxiflggab6HZk98Li2": true,
          "2rcQowthSghC0eSJ9CfDrSsqUGg2": true,
          "5Ho3VQMb6cdAVzcpSAUQqcK7tef2": true,
          AwDdENEQ63TefQk75ijXTshPmP13: true,
          Cz9IZYKzSvTLYjbNQtxM9Iqj8Sq2: true,
          uEApIEVAlTduTvE6DejrdLIjl672: true,
          wXK62qbY9fNusulkhHwZSqBqx3K3: true
        }
      };

      ref.set(postJobObject).then(function() {
        console.log("Document successfully written!");
      });
    }
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          headerText={"Post Job"}
          leftIcon={"angle-left"}
          onPress={() => goBack()}
        />
        <ScrollView>
          <Dropdown
            containerStyle={{ marginLeft: 15 }}
            onChangeText={(value, i, data) =>
              this._onChangeText(value, i, data, "selected")
            }
            label="Position"
            data={this.data}
          />
          <Text style={styles.text}>Time Schedule</Text>

          <View style={{ marginTop: 8, flexDirection: "row", marginLeft: 10 }}>
            <TouchableOpacity
              style={[
                this.state.fulltime ? { backgroundColor: "#2da8d2" } : {}
              ]}
              onPress={this._fulltime}
            >
              <CompensationType compType={"Full time"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.margin,
                this.state.parttime ? { backgroundColor: "#2da8d2" } : {}
              ]}
              onPress={this._parttime}
            >
              <CompensationType compType={"Part time"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Compensation</Text>
          <View
            style={{ marginLeft: 10, flexDirection: "row", paddingTop: 10 }}
          >
            <TouchableOpacity
              onPress={this._salary}
              style={[this.state.salary ? { backgroundColor: "#2da8d2" } : {}]}
            >
              <CompensationType compType={"Salary"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._hourly}
              style={[this.state.hourly ? { backgroundColor: "#2da8d2" } : {}]}
            >
              <CompensationType compType={"Hourly"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._tobeDiscussed}
              style={[
                this.state.tobeDiscussed ? { backgroundColor: "#2da8d2" } : {}
              ]}
            >
              <CompensationType compType={"To be Discussed"} />
            </TouchableOpacity>
          </View>
          {this.userSelectedSalaryOrHourLy()}
          <Text style={styles.text}>Experience</Text>
          <View style={styles.experience}>
            <TouchableOpacity
              onPress={this._none}
              style={[this.state.none ? { backgroundColor: "#2da8d2" } : {}]}
            >
              <Experience experienceType={"None"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._zeroToOne}
              style={[
                this.state.zeroToOne ? { backgroundColor: "#2da8d2" } : {}
              ]}
            >
              <Experience experienceType={"0-1 Yrs"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._oneToThree}
              style={[
                this.state.oneToThree ? { backgroundColor: "#2da8d2" } : {}
              ]}
            >
              <Experience experienceType={"1-3 Yrs"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._threeToFive}
              style={[
                this.state.threeToFive ? { backgroundColor: "#2da8d2" } : {}
              ]}
            >
              <Experience experienceType={"3-5 Yrs"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._fiveToTen}
              style={[
                this.state.fivetoTen ? { backgroundColor: "#2da8d2" } : {}
              ]}
            >
              <Experience experienceType={"5-10 Yrs"} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.text, styles.top]}>Description</Text>
          <View
            style={[
              styles.default,
              { height: Math.max(140, this.state.height) }
            ]}
          >
            <TextInput
              {...this.props}
              multiline={true}
              onChangeText={text => {
                this.setState({ description: text });
              }}
              onContentSizeChange={event => {
                this.setState({ height: event.nativeEvent.contentSize.height });
              }}
              style={[
                styles.margin,
                { height: Math.max(140, this.state.height) }
              ]}
              value={this.state.text}
              underlineColorAndroid={"transparent"}
            />
          </View>
          <TouchableOpacity
            style={styles.post}
            onPress={this.postJobToFireBase}
          >
            <Text>Publish</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC"
  },
  text: {
    // fontFamily: "Roboto",
    paddingTop: 15,
    marginLeft: 22,
    fontSize: 18,
    marginTop: 15
  },
  schedule: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
    borderWidth: 1,
    // borderRadius: 25,
    height: 40,
    width: 100,
    marginTop: 10
  },
  default: {
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  },
  post: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#2da8d2",
    marginTop: 15
  },
  experience: {
    marginLeft: 10,
    flexDirection: "row",
    paddingTop: 10
  },
  top: {
    marginTop: 15
  },
  margin: {
    marginLeft: 10
  }
});

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, actions)(PostJob);
