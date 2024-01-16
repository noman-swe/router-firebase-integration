import { useState } from "react"
import app from "../firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                setError(error);
                console.error(error);
            })
    }

    return { user, error, signInWithGoogle }
}

export default useFirebase;