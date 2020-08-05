import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Modal,
  Image
} from "react-native";
import Header from "../../../components/header";
import Avator, { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Filter from "./filter";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

export default class Candidates extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: "Candidates",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcon name={"account-search"} size={22} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      position: ["DISHWASHER", "WAITER", "CHEF", "COOK"],
      modalVisible: true
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const result = await fetch(`https://randomuser.me/api?results=30`);
    const json = await result.json();
    this.setState({ data: json.results });
  };

  /*
   <Text style={{ fontFamily: "Lato-Light" }}>DISHWASHER</Text>
        <Icon name={"check-circle"} size={18} color={"green"} />
        <Avatar large rounded source={{ uri: item.picture.thumbnail }} />


  */
  _renderItem(item) {
    const navigation = this.props.navigation;
    return (
      <View style={styles.mainViewForRenderItem}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: item.picture.medium }}
            style={styles.image}
            resizeMode={"cover"}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.name}>Ebou</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Icon
                name={"map-marker"}
                color={"gray"}
                style={{ marginTop: 2 }}
              />
              <Text style={{ marginLeft: 5, color: "gray" }}>Montreal</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 3 }}>
              <Text style={{ marginLeft: 5, color: "gray" }}>Full Time</Text>
              <Icon
                name={"check-circle"}
                size={12}
                color={"green"}
                style={{ marginLeft: 6, marginTop: 2 }}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 3 }}>
              <Text style={{ marginLeft: 5, color: "gray" }}>Part Time</Text>
              <Icon
                name={"check-circle"}
                size={12}
                style={{ marginLeft: 4, marginTop: 2 }}
                color={"green"}
              />
            </View>
          </View>
          <Text style={{ /* fontFamily: "Lato-Light", */ fontSize: 12 }}>
            DISHWASHER
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Bio:</Text>
          <Text numberOfLines={2} style={{ flex: 1, marginLeft: 4 }}>
            When the scroll view is disabled, this defines how far your touch
            may move off of the button, before deactivating the button. Once
            deactivated, try moving it back and you'll see that the button is
            once again reactivated! Move it back and forth several times while
            the scroll view is disabled. Ensure you pass in a constant to reduce
            memory allocations.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.text, styles.margin]}>Experience:</Text>
        </View>
      </View>
    );
  }

  closeModal() {
    this.setState({ modalVisible: false });
    //   <Modal visible={this.state.modalVisible}
    //   animationType={'slide'}
    //   onRequestClose={() => this.closeModal()}>
    // <Filter />
    // </Modal>
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText={"Candidates"}
          rightIcon={"filter"}
          onPressLeftIcon={this.renderFilterPage}
        />
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => this._renderItem(item)}
          //numColumns={2}
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
    height: 180,
    borderWidth: 1,
    borderColor: "gray",
    margin: 10
  },
  image: {
    height: 80,
    width: width / 4,
    //borderWidth: 1,
    borderRadius: 14,
    margin: 8
    //borderColor: "gray"
  },
  name: {
    // fontFamily: "Roboto",
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold"
  },
  text: {
    marginLeft: 8,
    //fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold"
  },
  margin: {
    marginTop: 3
  }
});
