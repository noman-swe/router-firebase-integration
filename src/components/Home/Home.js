import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>This is home</h3>
            <p style={{ 'color': '#FF641A', 'marginRight': '20px', 'fontWeight': '600', 'fontSize': '18px' }}>Current user is : {user?.displayName ? user.displayName : "No User."}</p>
        </div>
    );
};

export default Home;