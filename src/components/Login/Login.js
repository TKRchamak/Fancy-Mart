import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'

const Login = () => {

    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        firebase.initializeApp(firebaseConfig);
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {email} = result.user;
                const user = {email};
                setLoggedInUser(user);
                // handleResponse(res, true);
                history.replace(from);
                
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }

    // const handleResponse = (res, redirect) =>{
    //     setUser(res);
    //     setLoggedInUser(res);
    //     if(redirect){
    //         history.replace(from);
    //     }
    //   }

    return (
        <div className="container loginPageDesign">
            <h2>Please Login With Google</h2>
            <button className="btn btn-primary" onClick={handleGoogleLogin}>Sign In With Google</button>
        </div>
    );
};

export default Login;