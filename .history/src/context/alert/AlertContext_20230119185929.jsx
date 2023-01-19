import React, { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext('AlertContext')

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    return 
        <AlertContext.Provider value={{ alert: state }}>
            {children}
        </AlertContext.Provider>
    
}

export default AlertContext
