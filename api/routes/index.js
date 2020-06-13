 var firebase = require("firebase");

 var express = require('express');
 var router = express.Router();
 var admin = require('firebase-admin');
 var bodyParser = require('body-parser')

 require('dotenv/config');



 admin.initializeApp({
   credential: admin.credential.cert({
     "type": "service_account",
     "project_id": "launch-8f860",
     "private_key_id": "300d4082f1fa8d0b76ab6073ec17a2f4feca8aaf",
     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrntBSwO6Va1Ta\n+nC0c45hBmuc93CWBEC32156nm69io49ETjDbeUyzFrJY3mqbr7hYZLlze3Xi4Eh\nZCQbdDMKJmumq/ullk4Mc2a9x5+Nx903bNeMyBVqcq6d3b2+za23sSDrWzG7Ec4S\n+QcUprlDe13R2sWCGwM2NsECkhnxUliNYuZyfl3R0UAWotl8lwMdO3EIUcfCKKjX\nYTVhtwELBtxG89kMg/n7DCoe6+a5tS8p8yVUl3EL+SrnppLJHa6ignqeAE80GmZa\nccs0U9i03Z70THBaNZed8PG/ACTFiqX73UOcc0MMHMpPdvMm5kgigcl1eoAUhUM7\n90u6KgtxAgMBAAECggEABtpLIOvuGuVF+LK7U6JocwEQoBwwGdH0gnUt9E7lfayW\n8NC5OhbBjrRHXy4ZYUtewh0cJxBb9plbtulT4gzA5PqTMCFnnGHk5+05bm+otCxO\nkmsh46sxmyY620pLp98KmG5Dn6tahv+3SoIUOEzhG8Kyu3q1HD2yvbRLtdCRXJ7Q\nqLOG5UQyshgjrfUAmjfa9sT879zHgHT9KISJk1okEz1o8bQea3KYOYMwU2gGxyw6\nv/2R6Xe0v5aSqyedK+fRooAl0soLJoY/P4uvhHEqgRy6plwI7atAzzKDSQ0UjvNc\nmJxXuH0KXQdO0Bs173znexqN9joUDwgtrincRq4HyQKBgQDatIJX4iYcDYGLR1Uq\njAQKhM9XGLw29fvqk3od6KImLidHNOBSZEmtMhiFJ5o+EO+CVqHQ4G5t+3PsZbMG\nYwCM6ZUQx45H+dQs9/5P5JAscV59mQ6uQ2ReHSrBMQFvyJ7lbKitVkFFFeL8IUCy\nSsvubjbQ1UWDtLe94agm9V0dTwKBgQDI4tZdy9QcJQXTr5GTn9X3BmKD129HjsZs\n8vzFsz8dzywJizjiSzh1lRrRr0/EoeGwcAF0293U4BCGbF+vfvoSGDuA+Rbb7rLj\n/NfN69RvP4TMsv7FapFPgxOX/J2lBm6T3ncpNpuzsLBU53BGWoaCLRBsEcQ7oTZL\nSzRvii+bPwKBgF471MWlLaJ8t0qZy7pvZfZaTzRJ9h8AUjE6pi1o5STqUgY+ZEFb\n8NrtcN8+txjzFx/j0Ak+Cpbc94/uKfsggUY2BwKZ2VZt8NwHZs5pvy1HE92uK0Mu\nyno6uwdO5D2UBdL4xJ0bQzhPO+RDN6say0/KsVe97RvYrCrmphtTMXHFAoGAKaW1\nkZ6Xa/pU+e0VPkjN4DfHptO8M1arVp0NwKMHu9Neqt/dPDUiEGaIN96jp/1zv9OI\nycRneiG161h+gfDOQYAangOGNLSJC/E4gG2bDjFaA+I8JYuRcq2XG1R5DmSF+kwN\n4lJ690bzV7bftQZBiq1zESShzUb/7Z460cERW5sCgYAJ3DD/L6ZB/4HMtTfQ9oMw\nky1ckZOdQjPqSjUegQ67JApRNJd9jMj3qmG1G3/0mstYPRPibEaf3cDti5EGMgRl\nSa0Lk53idmOz858J1QzWuVbyIun4xbNsAl8SunkhMyjO6P0ugN4Qluj1P3Yte0Ca\n4tgocLf7gI/CxpqvSXTcUg==\n-----END PRIVATE KEY-----\n",
     "client_email": "firebase-adminsdk-rt8ek@launch-8f860.iam.gserviceaccount.com",
     "client_id": "100523490499848859189",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://oauth2.googleapis.com/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rt8ek%40launch-8f860.iam.gserviceaccount.com"
   }),
   databaseURL: 'https://launch-8f860.firebaseio.com/'
 });



 var roles = {
   "xdYKyiAt3zPaE5HLmCFDKqVRNn52": {
     isAdmin: false,
     isMathI: false,
     isMathII: false,
     isPhysics: true,
     isBio: false,
     isAstro: false,

   },
   "zgyT5fTb99Qmf1srV7S5CImxio32": {
     isAdmin: true,
     isMathI: true,
     isMathII: true,
     isPhysics: true,
     isBio: true,
     isAstro: true,
   }
 }

 router.get('/', function (req, res, next) {
   res.end();
 });
 router.use(bodyParser.text());

 router.post('/auth', function (req, res, next) {
   for (var user_uid in roles) {

     admin.auth().setCustomUserClaims(user_uid, {
       isAdmin: roles[user_uid]["isAdmin"],
       isMathI: roles[user_uid]["isMathI"],
       isMathII: roles[user_uid]["isMathII"],
       isPhysics: roles[user_uid]["isPhysics"],
       isBio: roles[user_uid]["isBio"],
       isAstro: roles[user_uid]["isAstro"],
     }).then(() => {
       console.log("Authenticated user")
     }).catch((err) => {
       console.log(err)
     });
   }
   res.end();
 });




 router.post('/roles', function (req, res, next) {

   admin.auth().getUser(req.body.uid).then((userRecord) => {
     console.log(userRecord.customClaims)
     res.send(userRecord.customClaims)
   }).catch((err) => {
     console.log(err);
   });

 });

 router.post('/forumpost', function (req, res, next) {

   admin.auth().getUser(req.body.uid).then((userRecord) => {
     console.log(userRecord.customClaims)
     res.send(userRecord.customClaims)
   }).catch((err) => {
     console.log(err);
   });

 });



 module.exports = router;