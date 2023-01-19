import React, { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({ 
            type: SET_ALERT,
            payload: {msg, type}
        })

        setTimeout(())
    }


    return <AlertContext.Provider value={{ alert: state, setAlert }}>
        {children}
    </AlertContext.Provider>

}

export default AlertContext
