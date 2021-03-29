import React, {useReducer} from 'react';

const initalState = []

export const ExpenseTrackerContext = React.createContext(initalState)

export const Provider = ({ children }) => {
    return (
        <ExpenseTrackerContext.Provider value={{appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}