import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrsw02tJfVOg5942KrmMQDgPqT2tORfaM',
  authDomain: 'goit-filmoteka-group6.firebaseapp.com',
  projectId: 'goit-filmoteka-group6',
  storageBucket: 'goit-filmoteka-group6.appspot.com',
  messagingSenderId: '259145174211',
  appId: '1:259145174211:web:3abb6bd76e9ef12b746676',
  measurementId: 'G-7R0DRVYQHE',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//rejestracja uzytkownika //
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

//logowanie uzytkownika //
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

// wylogowywanie uzytkownika //
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

// status uzytkownika //
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('User is logged in', user);
//     document.getElementById('logout-btn').style.display = 'block';
//   } else {
//     console.log('User is logged out');
//     document.getElementById('logout-btn').style.display = 'none';
//   }
// });
