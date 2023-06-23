const admin = require("firebase-admin");

const serviceAccount = require("../test.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: serviceAccount.storagebucket
});


module.exports = admin;