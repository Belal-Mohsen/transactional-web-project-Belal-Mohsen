const initialState = {
    isAuthenticated: false,
    user: null,
};

const savedUser = localStorage.getItem('user');
if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    initialState.isAuthenticated = true;
    initialState.user = parsedUser;
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
