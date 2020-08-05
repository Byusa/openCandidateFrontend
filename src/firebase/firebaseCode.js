import firebase from "react-native-firebase";

let firestoreRef = firebase.firestore();
let authRef = firebase.auth();
import { connect } from "react-redux";
import * as actions from "../redux/actions";

// create user for the company creator profile

// export const createUser = async (
//   firstName,
//   lastName,
//   email,
//   phone,
//   city,
//   companyName,
//   password
// ) => {
//   try {
//     let user = await authRef.createUserWithEmailAndPassword(email, password);
//     userObject = {
//       userUid: user.uid,
//       firstName: firstName,
//       lastName: lastName,
//       companies: {},
//       isManager: true,
//       city: city,
//       phoneNumber: phone,
//       email: email
//     };
//     let comp = "le deux gamins";
//     let anotherOne = "RestoEmploi";
//     userObject.companies[`${companyName}`] = true;
//     await firestoreRef
//       .collection("users")
//       .doc(user.uid)
//       .set(userObject);
//     await firestoreRef
//       .collection("location")
//       .doc(city)
//       .collection("companies")
//       .doc(companyName)
//       .collection("managers")
//       .doc(user.uid)
//       .set({ uid: user.uid });
//   } catch (error) {
//     console.log(error);
//   }
// };
export default class Firebase {
  fetchApplication = async () => {
    console.log("testing");
    firebase
      .firestore()
      .collection("location")
      .doc("Montréal")
      .collection("companies")
      .doc("Tiradito")
      .collection("jobsPosted")
      .get()
      .then(function(querySanpshot) {
        console.log(querySanpshot);
        querySanpshot.forEach(function(doc) {
          console.log("jobs testing");
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

function mapStateToProps(state) {
  return { create_profile: state.create_profile };
}

//export default fetchApplication;
// module.exports = {
//   fetchApplication: fetchApplication
// };
