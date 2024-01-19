import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import './products.css';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const Products = () => {
    // const { user } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <div style={{ 'textAlign': 'center', 'border': '1px solid bisque', 'width': '400px', 'margin': '0 auto', 'padding': '10px 20px', 'border-radius': '8px' }}>
                <h3>Knock Knock.. Who is there??</h3>
                <p >Hey, I am <span className='profile-name'>
                    {user?.displayName ? user.displayName : "Voot"}
                </span>
                </p>
            </div>
        </div>
    );
};

export default Products;