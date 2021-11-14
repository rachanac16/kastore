function getUiConfig() {
    return {
        'callbacks': {
            // Called when the user has been successfully signed in.
            'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
                if (authResult.user) {
                    console.log("called from callback")
                    return handleSignedInUser(authResult.user);
                }
                if (authResult.additionalUserInfo) {
                    document.getElementById('is-new-user').textContent =
                        authResult.additionalUserInfo.isNewUser ?
                            'New User' : 'Existing User';
                }
                return true;
            }
        },
        signInSuccessUrl: 'index.html',
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
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// Disable auto-sign in.
ui.disableAutoSignIn();

const handleSignedInUser = function(user) {
    console.log("signing in")
    for (let element of document.getElementsByClassName('user-signed-in')){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName('user-signed-out')){
        element.style.display="none";
    }

    return true;
};

const handleSignedOutUser = function() {
    console.log("signing out")
    for (let element of document.getElementsByClassName('user-signed-in')){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName('user-signed-out')){
        element.style.display="block";
    }
    ui.start('#firebaseui-container', getUiConfig());
};

firebase.auth().onAuthStateChanged(function(user) {
    console.log("auth changed");
    user ? handleSignedInUser(user) : handleSignedOutUser();
});


let initApp = function () {

    document.getElementById('sign-out').addEventListener('click', function () {
        console.log("sign out initiated!")
        firebase.auth().signOut();
    });

};



window.addEventListener('load', initApp);