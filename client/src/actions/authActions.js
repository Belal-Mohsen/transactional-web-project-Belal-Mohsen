export const loginSuccess = (user) => {
    const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName // Ensure this line is included
    };

    localStorage.setItem('user', JSON.stringify(userData));
    
    return {
        type: 'LOGIN_SUCCESS',
        payload: userData,
    };
};

export const loginFailure = () => {
    localStorage.removeItem('user');
    return {
        type: 'LOGIN_FAILURE',
    };
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: 'LOGOUT',
    };
};