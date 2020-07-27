const initialState = {
    number: 0,
    token: null,
    user: null,
    users: [],
    profile: null,
    friends: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === 'Add') {
        return {
            number: state.number + 1
        };
    }
    if (action.type === 'Delete') {
        return {
            number: state.number - 1
        };
    }

    if (action.type === 'setToken') {
        return {
            ...state,
            token: action.payload
        };
    }
    if (action.type === 'userInfo') {
        return {
            ...state,
            user: action.payload
        };
    }
    if (action.type === 'getUsers') {
        return {
            ...state,
            users: action.payload
        };
    }
    if (action.type === 'showProfile') {
        return {
            ...state,
            profile: action.payload
        };
    }
    if (action.type === 'friendsRow') {
        return {
            ...state,
            friends: action.payload
        };
    }


    return state;
};
export default reducer;