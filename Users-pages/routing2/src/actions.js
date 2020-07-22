export const addFriend = {
    type: 'Add',
}

export const deleteFriend = {
    type: 'Delete',
}

export const setToken = (token) => {
    return {
        type: 'setToken',
        payload: token
    }
}