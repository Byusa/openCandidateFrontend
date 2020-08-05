import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

class Applicants extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  _renderItem(item) {
    //function to go to next screen

    return (
      <View style={styles.mainViewForRenderItem}>
        <View style={{ justifyContent: "space-around", marginLeft: 15 }}>
          <Text style={{ fontSize: 18 }}>
            {`${item.firstName} ${item.lastName}`}
          </Text>
          <Text>{}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 14,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.applicants.applicants}
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
    height: 70,
    justifyContent: "space-between",
    borderBottomWidth: 0.8,
    borderColor: "gray",
    flexDirection: "row",
    backgroundColor: "white"
  }
});

function mapStateToProps(state) {
  return { applicants: state.getApplicants };
}

export default connect(mapStateToProps, actions)(Applicants);
