import React from 'react';
import "../css/Login.css";
import { auth, provider } from '../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div>
                <img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt="discord logo" className="login__logo"/>
            </div>
            <button className="login__btn" onClick={signIn}>Sign in</button>
        </div>
    )
}

export default Login
