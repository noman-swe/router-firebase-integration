import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
// import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const auth = getAuth(app);

const Home = () => {
    // const { user } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='home'>
            <div className="wrapper">
                <h3>This is home</h3>
                <p>Current user is :
                    <span style={{ 'color': '#FF641A', 'marginRight': '20px', 'fontWeight': '600', 'fontSize': '18px' }}>
                        {user?.displayName ? user.displayName : "No User."}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Home;