import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyAeLxGZyMEKidMoklUHOgkKnlkexIw0gFU',
  authDomain: 'reactapp-b31c4.firebaseapp.com',
  projectId: 'reactapp-b31c4',
  storageBucket: 'reactapp-b31c4.appspot.com',
  messagingSenderId: '577953862141',
  appId: '1:577953862141:web:9ee999e8d3e38ccea14994',
  measurementId: 'G-96WD781WK2',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.app = app.database();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  async register(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome,
    });
  }
  isInitialized() {
    return new Promise((resolve) => {
      app.auth().onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
