import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import * as actions from "../redux/actions";
import { connect } from "react-redux";

//testing

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Slider = props => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode={"cover"}
      source={{ uri: props.uri }}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width
  }
};

class SlideShow extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper autoplay height={100}>
          {this.props.create_profile.photo.map((item, i) => (
            <Slider uri={item} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, actions)(SlideShow);

/*
 ----------------------------------------------------------------------------------------
 |        PROP          |   type                |             Use                       |
 |                      |                       |                                       |
 ----------------------------------------------------------------------------------------                                                                                      
 |                      |                       |                                       |                                                                                    
 |     image            |   image               |                                       |                                                                                    
 |                      |                       |                                       |                                                                                    
 |                      |                       |                                       |                                                                                     
 |                      |                       |                                       |
 |                      |                       |                                       |
 |                      |                       |                                       |
 |                      |                       |                                       |
 ----------------------------------------------------------------------------------------
*/
