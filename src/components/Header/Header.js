import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/products'}>Products</CustomLink>
                <CustomLink to={'/orders'}>Orders</CustomLink>
                <CustomLink to={'/register'}>Register</CustomLink>

                {//user login kora thakle dekhabe 
                    user &&
                    <>
                        <CustomLink to={'/vip'}>VIP</CustomLink>
                    </>
                }

                <span style={{ 'color': '#FF641A', 'marginRight': '20px', 'fontWeight': '600', 'fontSize': '18px' }}>{user?.displayName && user.displayName}</span>

                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)}>Sign out</button>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                }
            </nav>
        </div>
    );
};

export default Header;