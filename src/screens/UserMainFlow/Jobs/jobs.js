import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/header";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome";

class JobsDisplayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    this.props.fetch_jobs_user();
    var time = "02-17-2018 12-59-20";
    this._days_hours_minutes_AgoCalculator(time);
  }

  _renderItem = item => {
    const { navigate } = this.props.navigation;
    //console.log(item);
    return (
      <TouchableWithoutFeedback onPress={() => navigate("display")}>
        <View style={styles.mainView}>
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 17 /* fontFamily: "Roboto-Bold" */ }}>
              {item.position}
            </Text>
            {item.timeSchedule === "Full Time" ? (
              <View style={styles.topView}>
                <Text style={styles.text}>{item.timeSchedule}</Text>
              </View>
            ) : (
              <View style={[styles.topView, styles.color]}>
                <Text style={styles.text}>{item.timeSchedule}</Text>
              </View>
            )}
          </View>
          <View style={{ marginLeft: 15, marginTop: 8, flexDirection: "row" }}>
            <Text style={{ fontSize: 16 /* fontFamily: "Lato" */ }}>
              {item.companyName}
            </Text>
            <Text style={{ fontSize: 16 /* fontFamily: "Lato" */ }}>
              {" "}
              - Montreal
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 15,
              marginRight: 15
            }}
          >
            {this.renderCompensation(item)}
            {this._days_hours_minutes_AgoCalculator(item.date)}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderCompensation = item => {
    const type = item.compensation;
    if (type == "To be Discussed") {
      return (
        <View>
          <Text>
            {"$"} {" to be discussed"}
          </Text>
        </View>
      );
    } else if (type == "Hourly") {
      return (
        <Text>
          {"$"}
          {item.hourlyRate} {" an hour"}
        </Text>
      );
    } else {
      return (
        <Text>
          {"$"}
          {item.monthlySalary} {" monthly"}
        </Text>
      );
    }
  };
  _handleEnd = () => {
    this.props.paginate(this.props.jobsData.lastVisible);
  };

  renderFooter = () => {
    if (!this.props.profile.isFetchingData) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _days_hours_minutes_AgoCalculator = data1 => {
    // get the current data
    // split the input to seperate data from time
    var splitedInput = data1.split(" ");
    var date = splitedInput[0].trim();
    var time = splitedInput[1];

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
    var todayDate = mm + "-" + dd + "-" + yyyy;
    // compare the current date with with the input
    if (date == todayDate) {
      // if the hours are the same , then  minutes ago
      // if the minutes are the same then seconds ago
      //split the into into hours, minutes and seconds
      var hour = today.getHours();
      var minutes = today.getMinutes();
      var second = today.getSeconds();
      var result;

      var diff;
      time = time.split("-");
      if (time[0] == hour) {
        if (time[1] == minutes) {
          diff = second - parseInt(time[2]);
          if (diff < 0) {
            result = diff + 60 + " seconds ago";
          } else {
            result = diff + " seconds ago";
          }
        } else {
          diff = minutes - parseInt(time[1]);
          if (diff < 0) {
            result = diff + 60 + " minutes ago";
          } else {
            result = diff + " minutes ago";
          }
        }
      } else {
        //another check for the hour
        if (parseInt(time[1]) > minutes && parseInt(time[0]) >= hour) {
          diff = minutes - parseInt(time[1]);
          result = diff + 60 + " minutes ago";
        } else {
          diff = hour - parseInt(time[0]);
          if (diff < 0) {
            result = diff + 24 + " hours ago";
          } else {
            result = diff + " hours ago";
          }
        }
      }
    } else {
      var date1 = new Date(date);
      var date2 = new Date(todayDate);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays > 30) {
        result = "30+ days ago";
      } else if (diffDays == 1) {
        return "a day ago";
      } else {
        result = diffDays + " days ago";
      }
    }
    return <Text>{result}</Text>;
  };

  _pullToRefresh = () => {
    this.props.fetch_jobs_user();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Jobs"} />
        <FlatList
          data={this.props.jobsData.data}
          onEndReachedThreshold={0}
          onEndReached={() => this._handleEnd()}
          ListFooterComponent={this.renderFooter}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => this._renderItem(item)}
          onRefresh={() => this._pullToRefresh}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    height: 22,
    width: 70,
    backgroundColor: "#C0F3FD",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 20
  },
  color: {
    backgroundColor: "#E7C372"
  },
  text: {
    fontSize: 11,
    // fontFamily: "Roboto-Bold",
    color: "white"
  },
  mainView: {
    height: 120,
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: "rgba(128,128,128,0.4)",
    backgroundColor: "white"
  }
});

function mapStateToProps(state) {
  return {
    jobsData: state.user_job_fetch,
    profile: state.create_profile
  };
}

export default connect(mapStateToProps, actions)(JobsDisplayScreen);

/*
Bugs to fix on this page

1) Repeating the first 15 listing twice
2) If no data is coming from firebase , meaning at the end try to see if you don't get any respose 
   then stop the loading


   pull to refresh functionality

*/
