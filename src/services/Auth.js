import React from 'react'
import {Redirect} from 'react-router-dom'

export const TOKEN_KEY = "@wip-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    return <Redirect to={{pathname: "/"}} />
};