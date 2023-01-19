import React, { createContext, useReducer } from 'react'
import alertReducer from

const AlertContext = createContext('AlertContext')

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)
}

