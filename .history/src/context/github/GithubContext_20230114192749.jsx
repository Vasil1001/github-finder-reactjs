import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    }

    const 
    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        setUsers(data);
        setLoading(false)
    }

    return <GithubContext.Provider
        value={{
            users,
            loading,
            fetchUsers,
        }}>

        {children}
    </GithubContext.Provider>
}

export default GithubContext
