const initialState = {
    number: 0,
    token: null,
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

    return state;
};
export default reducer;