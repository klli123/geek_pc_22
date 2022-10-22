export const Token_Key = 'token';

export function setToken(Token_Key, token) {
    sessionStorage.setItem(Token_Key, token)
}

export function getToken(Token_Key) {
    return sessionStorage.getItem(Token_Key);
}

export function removeToken(Token_Key) {
    sessionStorage.removeItem(Token_Key)
}

export function hasToken(Token_Key) {
    return !!getToken(Token_Key)
}

