import React from 'react';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state.from.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div className='login'>
            <div className="login-wrapper">
                <h1>Please Login</h1>

                <div className="other-sign-in-options">
                    <button onClick={handleGoogleSignIn} >Sign in with Google</button>
                </div>

                <form className='log-in-form'>
                    <input type="email" placeholder='Your Email' /> <br />
                    <input type="password" placeholder='Your Password' autoComplete='on' /> <br />
                    <input type="submit" value="Register" />
                </form>

            </div>


        </div>
    );
};

export default Login;