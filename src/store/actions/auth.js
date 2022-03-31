import { SET_TOKEN, REMOVE_TOKEN } from "../types/auth"

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        value: token,
    }
};

export const removeToken = () => {
    return {
        type: REMOVE_TOKEN
    }
};