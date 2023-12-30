import { getAuth, signOut } from "firebase/auth";

export const userSignOut = (navigate) => {
    const auth = getAuth();
   
    signOut(auth)
    .then(() => {
        console.log('Sign out successful');
        navigate('/login'); // Redirect user after sign out
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
};