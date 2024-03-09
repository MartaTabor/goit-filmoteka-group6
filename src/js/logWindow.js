var firebaseConfig = {
  apiKey: 'TWÓJ_API_KEY',
  authDomain: 'TWÓJ_PROJECT_ID.firebaseapp.com',
  projectId: 'TWÓJ_PROJECT_ID',
  storageBucket: 'TWÓJ_PROJECT_ID.appspot.com',
  messagingSenderId: 'TWÓJ_MESSAGING_SENDER_ID',
  appId: 'TWÓJ_APP_ID',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
