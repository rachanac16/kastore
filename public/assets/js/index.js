document.addEventListener('DOMContentLoaded', function() {
    // const loadEl = document.querySelector('#load');
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/users/rachanachaudhari16@gmail.com').get().then((data) => {});
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    // try {
    //   let app = firebase.app();
    //   let features = [
    //     // 'auth',
    //     // 'database',
    //     'firestore',
    //     // 'functions',
    //     'messaging',
    //     // 'storage',
    //     // 'analytics',
    //     //'remoteConfig',
    //     // 'performance',
    //   ].filter(feature => typeof app[feature] === 'function');
    //   loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
    // } catch (e) {
    //   console.error(e);
    //   loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    // }

    // FirebaseUI config.

    const uiConfig = {
        signInSuccessUrl: 'http://localhost:5000/index.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
            window.location.assign('<your-privacy-policy-url>');
        }
    };

// Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

});
