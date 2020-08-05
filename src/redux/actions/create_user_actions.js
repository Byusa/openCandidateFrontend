import { USER_CREATE_SUCCESS, USER_CREATE_FAIL } from "./types";
import firebase from "react-native-firebase";

var firestoreRef = firebase.firestore();
var authRef = firebase.auth();
import { connect } from "react-redux";
import createCompanyProfile from "./create_company_profile";
import { NavigationActions } from "react-navigation";

// create user for the company creator profile

export const createUser = (
  firstName,
  lastName,
  email,
  phone,
  city,
  companyName,
  password
) => async dispatch => {
  try {
    let user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    userObject = {
      userUid: user.uid,
      firstName: firstName,
      lastName: lastName,
      companies: {},
      isManager: true,
      city: city,
      phoneNumber: phone,
      email: email
    };
    dispatch(NavigationActions.navigate({ routeName: "imageScreen" }));
    userObject.companies[`${companyName}`] = true;
    await firestoreRef
      .collection("users")
      .doc(user.uid)
      .set(userObject);
    await firestoreRef
      .collection("location")
      .doc(city)
      .collection("companies")
      .doc(companyName)
      .collection("managers")
      .doc(user.uid)
      .set({ uid: user.uid });
    dispatch({ type: USER_CREATE_SUCCESS, payload: userObject });
  } catch (error) {
    dispatch({ type: USER_CREATE_FAIL, payload: error.message });
  }
};

export const createUserForUserSide = (
  firstName,
  lastName,
  email,
  phone,
  city,
  password
) => async dispatch => {
  try {
    let user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    userObject = {
      userUid: user.uid,
      firstName: firstName,
      lastName: lastName,
      companies: {},
      experience: {},
      education: {},
      isManager: false,
      city: "",
      phoneNumber: phone,
      email: email,
      availableForSickCallIn: false
      // jobs user applied for can be stored locally with asyncstorage
    };
    // dispatch(NavigationActions.navigate({ routeName: "userSide" }));
    //userObject.companies[`${companyName}`] = true;
    await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(userObject);
    // await firestoreRef
    //   .collection("location")
    //   .doc(city)
    //   .collection("companies")
    //   .doc(companyName)
    //   .collection("managers")
    //   .doc(user.uid)
    //   .set({ uid: user.uid });
    dispatch({ type: USER_CREATE_SUCCESS, payload: userObject });
  } catch (error) {
    dispatch({ type: USER_CREATE_FAIL, payload: error.message });
  }
};

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

export default connect(mapStateToProps, createCompanyProfile)(createUser);
