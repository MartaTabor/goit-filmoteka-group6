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

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('Login successful', userCredential);
    })
    .catch(error => {
      console.error('Login error', error);
    });
});

document.getElementById('logout-btn').addEventListener('click', function () {
  auth
    .signOut()
    .then(() => {
      console.log('User logged out');
    })
    .catch(error => {
      console.error('Logout error', error);
    });
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User is logged in', user);
    document.getElementById('logout-btn').style.display = 'block';
  } else {
    console.log('User is logged out');
    document.getElementById('logout-btn').style.display = 'none';
  }
});
