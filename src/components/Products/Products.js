import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './products.css';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div style={{ 'margin': '0px', 'textAlign': 'center' }}>
            <h3>Knock Knock.. Who is there??</h3>
            <p >Hey, I am <span className='profile-name'>
                {user?.displayName ? user.displayName : "Voot"}
            </span>
            </p>
        </div>
    );
};

export default Products;