import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // GET search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // GET single user 
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    // GET user repos from account
    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }



    // Clear users from state
    const clearUsers = () => dispatch({ type: "CLEAR_USERS" })
    // Set loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            repos: state.repos,
            getUser,
            searchUsers,
            clearUsers,
        }}>

        {children}
    </GithubContext.Provider>
}

export default GithubContext
