import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <h1>Please Login</h1>
            <div className="other-sign-in-options">
                <button>Sign in with Google</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Your Password' /> <br />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Login;