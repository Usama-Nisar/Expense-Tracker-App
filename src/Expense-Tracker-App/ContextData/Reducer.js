

export const Reducer = (state, action) => {
      
    switch(action.type){
       
        case 'DELETE_TRANSACTION' :
        return { 
            ...state, 
            Transactions: state.Transactions.filter(transaction => transaction.id !== action.payload)
        }

        case 'ADD_TRANSACTION' :
        return { 
            ...state, 
            Transactions: [action.payload, ...state.Transactions]
        }

        default :
        return state
    }
}
