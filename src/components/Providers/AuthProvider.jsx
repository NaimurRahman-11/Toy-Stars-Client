import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCreatingUser, setIsCreatingUser] = useState(false); // new state variable
   


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            if (!isCreatingUser) {
                setUser(loggedUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();

        }
    }, [isCreatingUser])


    const createUser = (email, password) => {
        setLoading(true);
        setIsCreatingUser(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // const createUser = (email, password) => {
    //     setLoading(true);
    //     setIsCreatingUser(true);
    //     return new Promise((resolve, reject) => {
    //       createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //           setLoading(false);
    //           setIsCreatingUser(false);
    //           resolve(result);
    //         })
    //         .catch((error) => {
    //           setLoading(false);
    //           setIsCreatingUser(false);
    //           reject(error);
    //         });
    //     });
    //   };


    const signIn = (email, password) => {
        setLoading(true);
        setIsCreatingUser(false);
        return signInWithEmailAndPassword(auth, email, password);
    }




    const logOut = () => {
        setLoading(true);
        setIsCreatingUser(false);
        return signOut(auth);
    }
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;