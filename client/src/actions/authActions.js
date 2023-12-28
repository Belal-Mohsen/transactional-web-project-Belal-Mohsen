export const loginSuccess = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: 'LOGIN_SUCCESS',
        payload: user,
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