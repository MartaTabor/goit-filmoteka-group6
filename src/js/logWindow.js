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

document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('Registration successful', userCredential);
    })
    .catch(error => {
      console.error('Registration error', error);
    });
});
