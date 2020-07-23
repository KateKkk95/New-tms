const initialState = {
    number: 0,
    token: null,
    user: null,
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

    return state;
};
export default reducer;