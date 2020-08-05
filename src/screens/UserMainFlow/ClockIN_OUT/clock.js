import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  Linking
} from "react-native";
import Header from "../../../components/header";
//import Camera from "react-native-camera";

//import QRCodeScanner from "react-native-qrcode-scanner";

export default class Clock_in_out extends Component<{}> {
  onSuccess(e) {
    alert(e.data);
  }
  render() {
    return (
      // <NavigatorIOS
      //   initialRoute={{
      //     component: QRCodeScanner,
      //     title: "Scan Code",
      //     passProps: {
      //       onRead: this.onSuccess.bind(this),
      //       topContent: (
      //         <Text style={styles.centerText}>
      //           Go to{" "}
      //           <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{" "}
      //           on your computer and scan the QR code.
      //         </Text>
      //       ),
      //       bottomContent: (
      //         <TouchableOpacity style={styles.buttonTouchable}>
      //           <Text style={styles.buttonText}>OK. Got it!</Text>
      //         </TouchableOpacity>
      //       )
      //     }
      //   }}
      //   style={{ flex: 1 }}
      // />
      <View>
        <Text>Hi</Text>
      </View>
    );
  }

  onBarCodeRead(e) {
    console.log("Barcode Found!", "Type: " + e.type + "\nData: " + e.data);
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    paddingTop: 65,
    color: "#777"
  },

  textBold: {
    fontWeight: "500",
    color: "#000"
  },

  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },

  buttonTouchable: {
    padding: 16
  }
});
