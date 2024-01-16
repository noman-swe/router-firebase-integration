import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                {
                    user.uid
                        ?
                        <button>Sign out</button>
                        :
                        <Link to={'/login'}>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;