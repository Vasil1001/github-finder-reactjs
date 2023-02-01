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



    



    // Clear users from state
    const clearUsers = () => dispatch({ type: "CLEAR_USERS" })
    // Set loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <GithubContext.Provider
        value={{
            ...state,
            dispatch,

            clearUsers,
            getUser,
            getUserRepos,
        }}>

        {children}
    </GithubContext.Provider>
}

export default GithubContext
