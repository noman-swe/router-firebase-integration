import React from 'react';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    return (
        <div className='login'>
            <h1>Please Login</h1>
            <div className="other-sign-in-options">
                <button onClick={signInWithGoogle} >Sign in with Google</button>
            </div>
            <form >
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' autoComplete='on' /> <br />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Login;