import React, { createContext, useReducer } from 'react'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null
AlertReducer
    const [state, dispatch] = useReducer(alertReducer, initialState)

    return <AlertContext.Provider value={{ alert: state }}>
        {children}
    </AlertContext.Provider>

}

export default AlertContext
