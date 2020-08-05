const admin = require("firebase-admin");
const functions = require("firebase-functions");
const request_code = require("./reuquest_code");

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://restojobs-cbe59.firebaseio.com"
});

exports.requestCode = functions.https.onRequest(request_code);
