import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../../components/header";
//import * as ImagePicker from "react-native-image-picker";

export default class ImageScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: ""
    };
  }

  openImagePicker = () => {
    console.log(ImagePicker);
    const options = {
      title: "Select Avator",
      storateOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("user cancelled");
      } else if (response.error) {
        console.log(response.error);
      } else if (response.customButton) {
        console.log("user ypes ");
      } else {
        this.setState({
          imagePath: response.uri
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Image"} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("companySide")}
        >
          <Text>Next Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openImagePicker}>
          <Text>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
