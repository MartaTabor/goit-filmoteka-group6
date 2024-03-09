<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-auth.js"></script>
<script>
  var firebaseConfig = {
    apiKey: "TWÓJ_API_KEY",
    authDomain: "TWÓJ_PROJECT_ID.firebaseapp.com",
    projectId: "TWÓJ_PROJECT_ID",
    storageBucket: "TWÓJ_PROJECT_ID.appspot.com",
    messagingSenderId: "TWÓJ_MESSAGING_SENDER_ID",
    appId: "TWÓJ_APP_ID"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
</script>