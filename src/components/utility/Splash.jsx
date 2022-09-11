import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ui } from '../auth/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Splash.css';

export const Splash = (props) => {
    const nav = useNavigate();
    useEffect(() => {
        // document.getElementById("side-bar-open-button").style.display = 'none';
        let uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    console.log("authResult", authResult);
                    // instance.userUID = authResult.user.uid;                    
                    props.setAppUser(authResult.user);

                    window.top.document.getElementById("side-bar-open-button").style.display = 'inline-block';
                    nav('/PLAYER');
                    // instance.props.setAppUser({ uid: authResult.user.uid, displayName: authResult.user.displayName });
                    // user = authResult.user;

                    return false;
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'redirect',
            // signInSuccessUrl: `PLAYER/`,
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>',
            // Privacy policy url.
            privacyPolicyUrl: '<your-privacy-policy-url>',

        };
        ui.start('#firebaseui-auth-container', uiConfig);

    }, []);




    return (
        <div className='splash-screen' style={{ height: '80vh' }}>
            <p style={{ margin: 0, marginTop: '20vh', textAlign: 'center' }}>DrugRunner.App</p>
            <div id="firebaseui-auth-container" />

        </div>
    );

};
