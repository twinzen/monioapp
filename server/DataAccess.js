import * as firebase from 'firebase';
import md5 from "react-native-md5";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDiHAmpaFUCIdgSkPm6_3aW-rU4j7IKSrs",
  authDomain: "monio-3b18e.firebaseapp.com",
  databaseURL: "https://monio-3b18e.firebaseio.com",
  projectId: "monio-3b18e",
  storageBucket: "monio-3b18e.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export class DataAccess {

  static firebaseConnected = true;

  static checkConnection () {
    let connectedRef = firebaseApp.database().ref('.info/connected');
    connectedRef.on('value', function(snap) {
      if (snap.val() === true) {
        console.log('connected');
        firebaseConnected = true;
      } else {
        console.log('disconnected');
        firebaseConnected = false;
      }
    });
  }

  static checkAuth() {
    return new Promise(function(resolve, reject){
      firebaseApp.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  }

  static logout() {
    return firebaseApp.auth().signOut();
  }

  static addKid (payload) {
    return firebaseApp.database().ref('kid/' + 'abcde').set(payload);
  }

  static getUserEmailByEmail (email) {
    if (firebaseConnected) {
      let emailMd5 = md5.hex_md5(email);
      let userRef = firebaseApp.database().ref('/users/'+emailMd5+'/email');
      return userRef.once('value');
    } else {
      return null;
    }
  }

  static persistUserTest () {
    firebaseApp.database().ref('users/' + 'abcde').set({
      username: 'name',
      email: 'email',
    });
  }

  static signUpNewUser (email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  static login (email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

}
