/**
 * 存取用户信息
 */
export const setUserInfoSession = (key, val) => {
    return sessionStorage.setItem(key, JSON.stringify(val))
}
export const getUserInfoSession = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
}

/**
 * 存取token
 */
export const setTokenSession = (key, val) => {
    return sessionStorage.setItem(key, val)
}
export const getTokenSession = (key) => {
    return sessionStorage.getItem(key)
}

