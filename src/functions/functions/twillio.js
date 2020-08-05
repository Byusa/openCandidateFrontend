const twilio = require("twilio");

const accountSid = "ACbbe48463b86edb15bad11ebc87c0e145";
const authToken = "c8f0a59639150d92e9eca9369e15b659";

module.exports = new twilio.Twilio(accountSid, authToken);
