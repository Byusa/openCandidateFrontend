import {
  FETCH_JOBS_USER_SUCCESS,
  FETCH_JOBS_USER_FAIL,
  PAGINATE_FETCH_USER_JOBS,
  UPDATE_LAST_DOCUMENT_FOR_PAGINATION,
  IS_FETCHING
} from "./types";
import firebase from "react-native-firebase";
import store from "../store";
let db = firebase.firestore();

export const fetch_jobs_user = () => async dispatch => {
  dispatch({ type: IS_FETCHING });
  data = [];
  firebase
    .firestore()
    .collection("location")
    .doc("Montréal")
    .collection("jobsPosted")
    .orderBy("time", "desc")
    .limit(15)
    .get()
    .then(async snapshot => {
      var lastVisible = snapshot.docs[snapshot.docs.length - 1];
      await snapshot.forEach(async doc => {
        await this.data.push(doc.data());
      });
      dispatch({
        type: UPDATE_LAST_DOCUMENT_FOR_PAGINATION,
        payload: lastVisible
      });
      dispatch({ type: FETCH_JOBS_USER_SUCCESS, payload: this.data });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
};

export const paginate = lastVisible => async dispatch => {
  // if lastVisible is null, return
  if (!lastVisible) return;
  dispatch({ type: IS_FETCHING });
  data: [];
  firebase
    .firestore()
    .collection("location")
    .doc("Montréal")
    .collection("jobsPosted")
    .orderBy("time", "desc")
    .startAfter(lastVisible)
    .limit(15)
    .get()
    .then(snapshot => {
      var lastVisible = snapshot.docs[snapshot.docs.length - 1];
      console.log(snapshot);
      snapshot.forEach(async doc => {
        this.data.push(doc.data());
      });
      dispatch({
        type: UPDATE_LAST_DOCUMENT_FOR_PAGINATION,
        payload: lastVisible
      });
      dispatch({ type: PAGINATE_FETCH_USER_JOBS, payload: this.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_JOBS_USER_FAIL });
    });
};
