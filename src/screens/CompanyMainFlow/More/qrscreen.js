import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Header from "../../../components/header";

import QRCode from "react-native-qrcode-svg";
import RNFS from "react-native-fs";
import Mailer from "react-native-mail";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const { width } = Dimensions.get("window");

class QrGeneratorScreen extends Component<{}> {
  //   render() {
  //     return (
  //       <View style={styles.container}>
  //
  //       </View>
  //     );
  //   }
  componentDidMount() {}
  //componentDidMount;

  state = {
    path: "",
    id: ""
  };
  getDataURL() {
    this.svg.toDataURL(this.callback);
  }
  callback(dataURL) {
    console.log(dataURL);
  }
  email = () => {
    this.svg.toDataURL(data => {
      RNFS.writeFile(
        RNFS.CachesDirectoryPath + "/my-photo.png",
        data,
        "base64"
      ).then(() => {
        Mailer.mail(
          {
            subject: "need help",
            recipients: ["eboujobe44@gmail.com"],

            body: "<b>A Bold Body</b>",
            isHTML: true,
            attachment: {
              path: RNFS.CachesDirectoryPath + "/my-photo.png",
              type: "png", // Mime Type: jpg, png, doc, ppt, html, pdf
              name: "Tiradito" // Optional: Custom filename for attachment
            }
          },
          (error, event) => {
            Alert.alert(
              error,
              event,
              [
                {
                  text: "Ok",
                  onPress: () => console.log("OK: Email Error Response")
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("CANCEL: Email Error Response")
                }
              ],
              { cancelable: true }
            );
          }
        );
      });
    });
  };

  sendEmail = async () => {
    try {
      await this.svg.toDataURL(data => {
        RNFS.writeFile(
          RNFS.CachesDirectoryPath + "/my-photo.png",
          data,
          "base64"
        );
      });
      await this.setState({
        path: RNFS.CachesDirectoryPath + "/my-photo.jpg"
      });
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.path);
    Mailer.mail(
      {
        subject: "need help",
        recipients: ["ebou.jobe@mail.mcgill.ca"],
        body: "<b>A Bold Body</b>",
        isHTML: true,
        attachment: {
          path: this.state.path,
          type: "pdf", // Mime Type: jpg, png, doc, ppt, html, pdf
          name: "Tiradito" // Optional: Custom filename for attachment
        }
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: "Ok",
              onPress: () => console.log("OK: Email Error Response")
            },
            {
              text: "Cancel",
              onPress: () => console.log("CANCEL: Email Error Response")
            }
          ],
          { cancelable: true }
        );
      }
    );
  };

  renderGeneratedQRCode = () => {
    if (this.state.id) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <QRCode
            value={this.state.id}
            getRef={c => (this.svg = c)}
            size={200}
          />
          <TouchableOpacity
            onPress={this.email}
            style={{
              marginTop: 40,
              height: 30,
              width: width / 2,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                /* fontFamily: "Roboto",*/ fontSize: 18
              }}
            >
              Send Email
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  test = () => {
    this.setState({ id: this.props.create_profile.placeID });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Generate QR Code"} />
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={this.test}
            style={{
              //marginTop: 20,
              height: 30,
              width: width / 2,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                /* fontFamily: "Roboto", */ fontSize: 18
              }}
            >
              Generate QRCode
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 8
            // justifyContent: "center",
            // alignItems: "center"
          }}
        >
          {this.renderGeneratedQRCode()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, actions)(QrGeneratorScreen);
