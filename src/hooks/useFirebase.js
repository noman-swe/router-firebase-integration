import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(()=> {

    }, []);

    const signInWithGoogle = () => {
        console.log('signing in soon');
    }

    return {user, setUser, signInWithGoogle}
}

export default useFirebase;