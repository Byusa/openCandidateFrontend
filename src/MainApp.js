import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// redux imports
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import MainNavigator from "./config/routes";
import { addNavigationHelpers } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");

const App = ({ dispatch, nav }) => (
  <MainNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});
const AppWithNavigation = connect(mapStateToProps)(App);

export default class MainApp extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppWithNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// 1  --> 3
// 2  --> 4,
// 3 -->  5,
// 4 --> 6
