// Assuming logout is an action creator you have defined
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../actions/authActions";

export const userSignOut = (navigate, dispatch) => {
    const auth = getAuth();

    signOut(auth)
    .then(() => {
        console.log('Sign out successful');
        dispatch(logout()); // Dispatch the logout action to update Redux state
        navigate('/login'); // Redirect user after sign out
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
};
