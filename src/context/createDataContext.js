import React, { useReducer } from 'react';

// Abstract context interface that handles reducer implementation, a set of actions, and default values
export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {}; // Functions object from the implemented reducer

        // Iterates through the list of functions defined for the reducer
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        // Returns the data and appropriate actions listed to the children screens
        return (
            <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
        );
    }

    return { Context, Provider };
}