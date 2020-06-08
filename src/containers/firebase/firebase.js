import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCNmhvwnxlbzgVcw0_XRC9KmcjYWWIZqnU",
  authDomain: "on-card.firebaseapp.com",
  databaseURL: "https://on-card.firebaseio.com",
  projectId: "on-card",
  storageBucket: "on-card.appspot.com",
  messagingSenderId: "149717466426",
  appId: "1:149717466426:web:39f4624ef948ffd10ba403",
  measurementId: "G-T76H1DZ38B",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.dataBase = app.database();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(userName, email, password, serialNo) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: userName,
      displaySerialNumber: serialNo,
    });
  }

  addUser(userName, email, password, serialNo) {
    return this.dataBase.ref("users/" + serialNo).set({
      email: email,
      userName: userName,
      serialNo: serialNo,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
