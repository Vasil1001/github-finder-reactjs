import React, { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set an alert
    return <AlertContext.Provider value={{ alert: state }}>
        {children}
    </AlertContext.Provider>

}

export default AlertContext
