import { GET_APPLICANTS_SUCCESS, GET_APPLICANTS_FAIL } from "./types";
import firebase from "react-native-firebase";

export const getApplicants = input => async dispatch => {
  data = [];
  try {
    await Promise.all(
      Object.keys(input).map(async (item, i) => {
        var snapShot = await firebase
          .firestore()
          .collection("users")
          .doc(`${item}`)
          .get();
        this.data.push(snapShot._data);
      })
    );
    dispatch({ type: GET_APPLICANTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_APPLICANTS_FAIL, payload: error });
  }
};
