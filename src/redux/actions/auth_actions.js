import { AsyncStorage } from "react-native";
//import { AccessToken, LoginManager } from "react-native-fbsdk";
import firebase from "react-native-firebase";
import { NavigationActions } from "react-navigation";

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
  // try {
  //   let result = await LoginManager.logInWithReadPermissions([
  //     "public_profile",
  //     "email"
  //   ]);
  //   if (!result.isCancelled) {
  //     let data = await AccessToken.getCurrentAccessToken();
  //     const credential = firebase.auth.FacebookAuthProvider.credential(
  //       data.accessToken
  //     );
  //     await firebase.auth().signInWithCredential(credential);
  //   } else {
  //     return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  //   }

  //   // get user info
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: user._user });
  //       dispatch(NavigationActions.navigate({ routeName: "phoneNumber" }));
  //     } else {
  //       console.log("no user is signed in ");
  //     }
  //   });
  // } catch (error) {
  //   dispatch({ type: FACEBOOK_LOGIN_FAIL, payload: error });
  // }
  console.log("testing");
};
