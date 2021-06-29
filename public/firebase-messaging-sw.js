// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    databaseURL: 'https://project-id.firebaseio.com',
    apiKey: "AIzaSyBzZWyEoXi0BCLOvF-nIiZG3nCuStSBzvk",
    authDomain: "equipbid-1eb44.firebaseapp.com",
    projectId: "equipbid-1eb44",
    storageBucket: "equipbid-1eb44.appspot.com",
    messagingSenderId: "791805451977",
    appId: "1:791805451977:web:af7908413940b0b0567718",
    measurementId: "G-YMMPK0PW3F"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});