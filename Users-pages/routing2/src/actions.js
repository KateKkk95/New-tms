
export const setToken = (token) => {
    return {
        type: 'setToken',
        payload: token
    }

}
export const userInfo = (user) => {
    return {
        type: 'userInfo',
        payload: user
    }
}
export const getUsers = (users) => {
    return {
        type: 'getUsers',
        payload: users
    }
}
export const showProfile = (profile) => {
    return {
        type: 'showProfile',
        payload: profile
    }
}
export const friendsRow = (friends) => {
    return {
        type: 'friendsRow',
        payload: friends
    }
}