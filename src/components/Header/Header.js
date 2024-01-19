import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span style={{ 'color': '#FF641A', 'marginRight': '20px', 'fontWeight': '600', 'fontSize': '18px' }}>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)}>Sign out</button>
                        :
                        <Link to={'/login'}>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;