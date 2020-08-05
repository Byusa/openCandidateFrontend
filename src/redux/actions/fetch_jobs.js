import { FETCH_JOBS_POSTED_SUCCESS, FETCH_JOBS_POSTED_FAIL } from "./types";
import firebase from "react-native-firebase";
import store from "../store";

let db = firebase.firestore();

export const fetchJobs = () => async dispatch => {
  data = [];
  var Jobsref = firebase
    .firestore()
    .collection("location")
    .doc(store.getState().create_profile.city)
    .collection("jobsPosted");

  var query = Jobsref.where(
    "companyName",
    "==",
    store.getState().create_profile.companyName
  )
    .get()
    .then(function(querySanpshot) {
      //console.log(querySanpshot);
      dispatch({
        type: FETCH_JOBS_POSTED_SUCCESS,
        payload: querySanpshot._docs
      });
    })
    .catch(function(error) {
      console.log(error);
      dispatch({ type: FETCH_JOBS_POSTED_FAIL, payload: error });
    });
};
