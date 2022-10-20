const Token_Key = 'token';

export function setToken(Token_Key, token) {
    sessionStorage.setItem(Token_Key, token)
}

export function getToken(Token_Key) {
    return sessionStorage.getItem(Token_Key);
}

export function removeToken() {
    sessionStorage.removeItem()
}

export function hasToken(Token_Key) {
    if (!!Token_Key) {
        return true
    }
    return false
}

