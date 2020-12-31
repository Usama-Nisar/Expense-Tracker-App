import React, {useContext} from 'react'
import { GlobalContext } from '../ContextData/GlobalData';
import { Transaction } from './Transaction';

export const Transaction_History = () => {

    const {Transactions} = useContext(GlobalContext)


    return (

        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {
                    Transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
         </div>
    )
}
