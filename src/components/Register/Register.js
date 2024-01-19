import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <div className="reg-wrapper">

                <h2>Please Register Now</h2>
                <form className='reg-form'>
                    <input type="text" name="" id="" placeholder='Your Name' /> <br />
                    <input type="email" name="" id="" placeholder='Your Email' /> <br />
                    <input type="password" name="" id="" placeholder='Your Password' /> <br />
                    <input type="submit" value="register" />
                </form>
            </div>
        </div>
    );
};

export default Register;