import React,{useReducer} from 'react'
import {Reducer} from './Reducer'

// INITIAL SATATE
const initialData = {

    Transactions : [

        {id: 1 , description: "Flover" , amount:  -50},
        {id: 2 , description: "Bag" , amount:  100},
        {id: 3 , description: "Lamp" , amount:  -40}
    ]
}


// CREATE GLOBAL CONTEXT 
export const GlobalContext = React.createContext(initialData)



// CREATE GLOBLA PROVIDER COMPONENT
export const GlobalProvider = ({children}) => {

const [state, dispatch ] =  useReducer(Reducer, initialData)


// CREATE ACTION

function deleteItem(id)  {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
}

function addItem(transaction)  {
    dispatch({type: 'ADD_TRANSACTION', payload: transaction});
}

    return(
        <GlobalContext.Provider value={{Transactions: state.Transactions, deleteItem, addItem}}>
              {children}
        </GlobalContext.Provider>
    )
}