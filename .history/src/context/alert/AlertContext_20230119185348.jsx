import React, { createContext, useReducer } from 'react'


const AlertContext = createContext('AlertContext')

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReduce, initialState)
}

